import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {RostersSection} from './components/RostersSection';
import {ScheduleSection} from './components/ScheduleSection';
import {AchievementsSection} from './components/AchievementsSection';
import {JerseySection} from './components/JerseySection';
import {RecruitmentSection} from './components/RecruitmentSection';
import {Footer} from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060A13] text-[#F1F5F9] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <RostersSection />
        <ScheduleSection />
        <AchievementsSection />
        <JerseySection />
        <RecruitmentSection />
      </main>
      <Footer />
    </div>
  );
}
