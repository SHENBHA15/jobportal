import { useState, FormEvent } from 'react';
import { db, storage } from '@/config/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface JobPostData {
  jobRole: string;
  companyName: string;
  experience: string;
  salary: string;
  location: string;
  skills: string[];
  companyLogoUrl?: string;
}

const JobEntry: React.FC = () => {
  const [jobRole, setJobRole] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>('');
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleLogoUpload = async (): Promise<string> => {
    if (companyLogo) {
      const storageRef = ref(storage, `logos/${companyLogo.name}`);
      await uploadBytes(storageRef, companyLogo);
      const logoUrl = await getDownloadURL(storageRef);
      return logoUrl;
    }
    return '';
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    let companyLogoUrl = '';
    if (companyLogo) {
      try {
        companyLogoUrl = await handleLogoUpload();
      } catch (error) {
        console.error("Error uploading logo:", error);
        setLoading(false);
        return;
      }
    }

    const jobPostData: JobPostData = {
      jobRole,
      companyName,
      experience,
      salary,
      location,
      skills,
      companyLogoUrl,
    };

    try {
      await addDoc(collection(db, "Job Posts"), jobPostData);
      console.log("Job Posted Successfully!");
      // Optionally reset form fields
      setJobRole('');
      setCompanyName('');
      setExperience('');
      setSalary('');
      setLocation('');
      setSkills([]);
      setSkillInput('');
      setCompanyLogo(null);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md font-montserrat">
      <h1 className="text-2xl font-extrabold mb-4 text-center">Job Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4 font-medium">
        <div>
          <label className="block text-gray-700">Job Role:</label>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Salary:</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Skills Needed:</label>
          <div className="flex items-center mt-1">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="p-2 w-full border rounded-md"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="ml-2 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add
            </button>
          </div>
          <div className="mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Company Logo:</label>
          <input
            type="file"
            onChange={(e) => setCompanyLogo(e.target.files?.[0] || null)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700" disabled={loading}>
          {loading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default JobEntry;
