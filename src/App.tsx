// Path: src/App.tsx

import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { motion } from 'framer-motion';

const OSLayout = () => {
  const { glassClass, ambientGlow } = useTheme();

  return (
    <div className="relative w-full h-screen overflow-hidden p-8 flex flex-col items-center">
      {/* Background Ambient Glows  */}
      <div className={`${ambientGlow} w-[600px] h-[600px] bg-blue-500 top-[-20%] left-[-10%]`} />
      <div className={`${ambientGlow} w-[500px] h-[500px] bg-indigo-600 bottom-[-10%] right-[-10%]`} />

      {/* Main OS Shell [cite: 11] */}
      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`w-full max-w-6xl mb-10 p-8 rounded-[2.5rem] ${glassClass} flex justify-between items-center`}
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight">KitchenOS</h1>
          <p className="text-white/40 text-sm mt-1 uppercase tracking-[0.2em]">System v1.0.0</p>
        </div>
      </motion.header>

      {/* Placeholder for Widget System (Phase 3) [cite: 4] */}
      <main className="w-full max-w-6xl flex-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`h-64 rounded-[3rem] ${glassClass} flex items-center justify-center`}
        >
          <span className="text-white/30 font-medium italic">Foundation Active. Initialize Widget System...</span>
        </motion.div>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <OSLayout />
    </ThemeProvider>
  );
}

export default App;