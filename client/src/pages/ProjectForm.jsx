import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Plus, Trash } from 'lucide-react';
import API from '../api';

const ProjectForm = () => {
    const { id } = useParams(); // If ID exists, we are EDITING
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
        overview: '',
        liveLink: '',
        githubLink: '',
        role: '',
        year: '',
        tags: [],
        features: [],
        technologies: []
    });

    // Fetch data if editing
    useEffect(() => {
        if (id) {
            const fetchProject = async () => {
                const { data } = await API.get(`/projects/${id}`);
                setFormData(data);
            };
            fetchProject();
        }
    }, [id]);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formDataObj = new FormData();
        formDataObj.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            // Send to our new upload route
            const { data } = await API.post('/upload', formDataObj, config);

            // Set the returned path (e.g., '/uploads/image-123.jpg') into our form
            setFormData({ ...formData, image: `http://localhost:5000${data}` });
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (id) {
                await API.put(`/projects/${id}`, formData);
            } else {
                await API.post('/projects', formData);
            }
            navigate('/admin');
        } catch (error) {
            console.error("Save failed", error);
        } finally {
            setLoading(false);
        }
    };

    // Helper to handle array inputs (tags and features)
    const handleArrayChange = (index, value, field) => {
        const newArray = [...formData[field]];
        newArray[index] = value;
        setFormData({ ...formData, [field]: newArray });
    };

    const addArrayField = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ""] });
    };

    const removeArrayField = (index, field) => {
        const newArray = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: newArray });
    };

    return (
        <div className="min-h-screen bg-bgDark text-textLight p-8">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{id ? 'Edit' : 'Add'} <span className="text-primary">Project</span></h1>
                    <button type="button" onClick={() => navigate('/admin')} className="text-textGray hover:text-white"><X /></button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-textGray mb-1">Title</label>
                            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary" required />
                        </div>
                        <div>
                            <div>
                                <label className="block text-sm text-textGray mb-1">Project Image</label>
                                <input
                                    type="file"
                                    onChange={uploadFileHandler}
                                    className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-blue-600"
                                />
                                {uploading && <p className="text-sm text-primary mt-2">Uploading image...</p>}
                                {formData.image && !uploading && (
                                    <p className="text-sm text-green-400 mt-2">Image uploaded successfully!</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-textGray mb-1">GitHub Link</label>
                            <input type="text" value={formData.githubLink} onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })} className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary" required />
                        </div>
                        <div>
                            <label className="block text-sm text-textGray mb-1">Live Link (Optional)</label>
                            <input type="text" value={formData.liveLink} onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })} className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                        </div>
                        {/* Add this below the GitHub/Live Link section */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-textGray mb-1">Your Role</label>
                                <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Lead Developer" className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm text-textGray mb-1">Year Built</label>
                                <input type="text" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} placeholder="e.g. 2024" className="w-full bg-cardDark border border-white/10 rounded-lg p-3 outline-none focus:border-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-textGray mb-1">Short Description (for card)</label>
                    <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-cardDark border border-white/10 rounded-lg p-3 h-20 outline-none focus:border-primary" required />
                </div>

                <div>
                    <label className="block text-sm text-textGray mb-1">Deep Overview (for detail page)</label>
                    <textarea value={formData.overview} onChange={(e) => setFormData({ ...formData, overview: e.target.value })} className="w-full bg-cardDark border border-white/10 rounded-lg p-3 h-40 outline-none focus:border-primary" />
                </div>

                {/* Dynamic Tags Input */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm text-textGray">Tech Stack Tags</label>
                        <button type="button" onClick={() => addArrayField('tags')} className="text-primary text-xs flex items-center gap-1"><Plus size={14} /> Add Tag</button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {formData.tags.map((tag, i) => (
                            <div key={i} className="flex items-center gap-2 bg-cardDark p-2 rounded-lg border border-white/10">
                                <input type="text" value={tag} onChange={(e) => handleArrayChange(i, e.target.value, 'tags')} className="bg-transparent outline-none text-xs w-20" />
                                <button type="button" onClick={() => removeArrayField(i, 'tags')} className="text-red-500"><Trash size={14} /></button>
                            </div>
                        ))}
                    </div>
                    {/* Dynamic Features Input */}
                    <div className="space-y-4 border-t border-white/10 pt-6">
                        <div className="flex justify-between items-center">
                            <label className="text-sm text-textGray">Key Features (Bullet Points)</label>
                            <button type="button" onClick={() => addArrayField('features')} className="text-primary text-xs flex items-center gap-1"><Plus size={14} /> Add Feature</button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {formData.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 bg-cardDark p-2 rounded-lg border border-white/10">
                                    <input type="text" value={feature} onChange={(e) => handleArrayChange(i, e.target.value, 'features')} placeholder="e.g. Real-time chat using Socket.io" className="bg-transparent outline-none text-sm w-full p-1" />
                                    <button type="button" onClick={() => removeArrayField(i, 'features')} className="text-red-500 p-2"><Trash size={16} /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button disabled={loading} className="w-full bg-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all">
                    <Save size={20} /> {loading ? 'Saving...' : 'Save Project'}
                </button>
            </form>
        </div>
    );
};

export default ProjectForm;