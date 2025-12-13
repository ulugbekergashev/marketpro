import { TESTIMONIALS } from '../constants';

// Placeholder service that replaces Gemini AI functionality
// This ensures the app works without an API key

export const generateHeroImage = async (): Promise<string | null> => {
  // Return null to let the component use its default fallback or nothing
  return null;
};

export const generateTestimonialImages = async (): Promise<string[]> => {
  // Return static placeholder images for testimonials
  return TESTIMONIALS.map(() =>
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop"
  );
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; content: string }[]
): Promise<string> => {
  // Return a static response since AI is disabled
  return "Kechirasiz, hozirgi vaqtda AI tizimi o'chirilgan. Iltimos, menejer bilan bog'laning.";
};