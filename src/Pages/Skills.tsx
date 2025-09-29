import React, { useState } from 'react'
import TechStack from '../Components/Tabs/TechStack'
import Tools from '../Components/Tabs/Tools'
import OtherSkills from '../Components/Tabs/OtherSkills'

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Tech' | 'Tools' | 'Other'>('Tech')

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full lg:w-[80%] h-full lg:h-[85%] flex flex-col mt-14 md:mt-24 lg:mt-10'>
          <p className='text-white font-extrabold text-4xl text-center mt-8 lg:mt-3 heading'>Skills and Expertise</p>

          {/* ------ Buttons / Tabs ------ */}
          <div className='mt-6 flex items-center justify-center'>
            <div className='bg-[#313236] rounded-lg p-2 flex gap-2 text-white body'>
              <button className={`${activeTab === 'Tech' ? 'bg-background' : 'hover:bg-white/10'} px-4 py-2 rounded-md transition`} onClick={() => setActiveTab('Tech')}>Tech Stack</button>

              <button className={`${activeTab === 'Tools' ? 'bg-background' : 'hover:bg-white/10'} px-4 py-2 rounded-md transition`} onClick={() => setActiveTab('Tools')}>Tools</button>

              <button className={`${activeTab === 'Other' ? 'bg-background' : 'hover:bg-white/10'} px-4 py-2 rounded-md transition`} onClick={() => setActiveTab('Other')}>Other Skills</button>
            </div>
          </div>

          {activeTab === 'Tech' && <TechStack />}
          {activeTab === 'Tools' && <Tools />}
          {activeTab === 'Other' && <OtherSkills />}
        </div>
    </div>
  )
}

export default Skills


