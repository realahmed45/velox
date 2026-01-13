import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';

export default function SymptomChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { q: "Where does it hurt?", options: ["Head", "Chest", "Stomach", "Joints"] },
    { q: "How long have you felt this?", options: ["Just started", "Few days", "Weeks", "Months"] },
    { q: "Rate the pain (1-10)", options: ["Mild (1-3)", "Moderate (4-6)", "Severe (7-9)", "Unbearable (10)"] },
  ];

  const handleAnswer = (ans) => {
    const newAnswers = [...answers, ans];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep('result');
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
          <Activity size={20} />
        </div>
        <h3 className="font-bold text-lg">Symptom Checker</h3>
      </div>

      {step !== 'result' ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="mb-6">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
            <h4 className="text-xl font-bold mt-2">{questions[step].q}</h4>
          </div>
          <div className="space-y-3">
            {questions[step].options.map(opt => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="w-full p-4 text-left rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center animate-in zoom-in-95 duration-300">
           <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
           </div>
           <h4 className="text-xl font-bold mb-2">Analysis Complete</h4>
           <p className="text-gray-500 mb-6">Based on your answers, we recommend scheduling a consultation with a General Practitioner.</p>
           
           <div className="bg-gray-50 p-4 rounded-xl text-left mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase">Your Inputs</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {answers.map(a => (
                        <span key={a} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700">{a}</span>
                    ))}
                </div>
           </div>

           <button onClick={reset} className="text-blue-600 font-bold hover:underline">Start Over</button>
        </div>
      )}
    </div>
  );
}
