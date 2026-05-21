import React, { useState, useEffect } from 'react';
import { Code, Trophy, Activity, ExternalLink, Star, Users, Building, Calendar } from 'lucide-react';

const CodingProfiles = () => {
  const [cfData, setCfData] = useState(null);
  const [cfLoading, setCfLoading] = useState(true);

  // YOUR HANDLES HERE
  const CF_HANDLE = "ashish_verma1001"; 
  const LC_HANDLE = "ashish_verma101"; 

  // We only need to fetch Codeforces now, as LeetCode is handled via a dynamic SVG image
  useEffect(() => {
    const fetchCodeforces = async () => {
      try {
        const cfResponse = await fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`);
        const cfJson = await cfResponse.json();
        
        if (cfJson.status === "OK") {
          setCfData(cfJson.result[0]);
        }
      } catch (error) {
        console.error("Error fetching Codeforces profile:", error);
      } finally {
        setCfLoading(false);
      }
    };

    fetchCodeforces();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Competitive Programming</h2>
        <div className="h-[1px] bg-white/10 flex-grow ml-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LeetCode Card (Using dynamic SVG) */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#FFA116]/50 transition-colors flex flex-col h-full">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Code size={120} className="text-[#FFA116]" />
          </div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-[#FFA116]">LeetCode</span>
              </h3>
              <p className="text-slate-400 text-sm">@{LC_HANDLE}</p>
            </div>
            <a href={`https://leetcode.com/${LC_HANDLE}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#FFA116] transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Dynamic LeetCode SVG Image */}
          <div className="relative z-10 flex-grow flex items-center justify-center bg-black/20 overflow-hidden mt-auto">
            {/* We append a timestamp to the image URL to prevent aggressive browser caching */}
            <img 
              src={`https://leetcard.jacoblin.cool/${LC_HANDLE}?theme=dark&font=Baloo%20Bhaina%202&ext=heatmap`}
              alt={`${LC_HANDLE}'s LeetCode Stats`}
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<p class="text-slate-400 p-4">Stats temporarily unavailable</p>';
              }}
            />
          </div>
        </div>

        {/* Codeforces Card (Using API) */}
        {/* Codeforces Card (Using API) */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-[#3B5998]/50 transition-colors flex flex-col h-full">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Trophy size={120} className="text-[#3B5998]" />
          </div>
          
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="flex items-center gap-4">
              {/* Dynamically loads your CF profile picture */}
              {cfData?.avatar && (
                <img 
                  src={cfData.avatar} 
                  alt="CF Avatar" 
                  className="w-12 h-12 rounded-full border border-[#3B5998]/50 shadow-lg"
                />
              )}
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-[#3B5998]">Codeforces</span>
                </h3>
                <p className="text-slate-400 text-sm">@{CF_HANDLE}</p>
              </div>
            </div>
            <a href={`https://codeforces.com/profile/${CF_HANDLE}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#3B5998] transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>

          {cfLoading ? (
             <div className="flex justify-center items-center py-10 text-[#3B5998] flex-grow relative z-10">
               <Activity className="animate-spin w-8 h-8" />
             </div>
          ) : cfData ? (
            <div className="relative z-10 flex flex-col flex-grow">
              
              {/* Primary Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-1">Current Rating</p>
                  <p className="text-3xl font-bold text-white">{cfData.rating || "N/A"}</p>
                  <p className="text-xs text-[#3B5998] mt-1 capitalize font-medium">{cfData.rank || "Unrated"}</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-1">Max Rating</p>
                  <p className="text-3xl font-bold text-white">{cfData.maxRating || "N/A"}</p>
                  <p className="text-xs text-slate-500 mt-1 capitalize font-medium">Peak: {cfData.maxRank || "N/A"}</p>
                </div>
              </div>

              {/* Secondary Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Replaced Contribution with Member Since */}
                <div className="bg-black/20 px-4 py-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Member Since</p>
                    <p className="text-lg font-semibold text-white">
                      {cfData.registrationTimeSeconds 
                        ? new Date(cfData.registrationTimeSeconds * 1000).getFullYear() 
                        : "N/A"}
                    </p>
                  </div>
                  <Calendar size={18} className="text-emerald-500 opacity-50" />
                </div>

                {/* Followers Block remains the same */}
                <div className="bg-black/20 px-4 py-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Followers</p>
                    <p className="text-lg font-semibold text-white">{cfData.friendOfCount || 0}</p>
                  </div>
                  <Users size={18} className="text-[#3B5998] opacity-50" />
                </div>
              </div>

              {/* Badges / Organization Footer */}
              <div className="mt-auto flex flex-wrap gap-3 text-sm">
                <span className="text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full capitalize flex items-center gap-2 font-semibold border border-cyan-400/20">
                  <Star size={16} /> {cfData.rank || "Unrated"}
                </span>
                
                {cfData.organization && (
                  <span className="text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 font-medium">
                    <Building size={16} className="text-slate-400" /> 
                    {/* Truncate long org names like IITG to keep UI clean */}
                    {cfData.organization.length > 25 ? `${cfData.organization.substring(0, 25)}...` : cfData.organization}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center p-4 text-slate-400 flex-grow relative z-10 bg-black/20 rounded-xl">
              <p>Could not load Codeforces data.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;