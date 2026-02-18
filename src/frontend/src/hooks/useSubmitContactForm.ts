import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      // Backend accepts (name, email, message) - include phone in message
      const enhancedMessage = `Phone/WhatsApp: ${data.phone}\n\n${data.message}`;
      await actor.submitContactForm(data.name, data.email, enhancedMessage);
    },
    onSuccess: () => {
      // Invalidate any relevant queries if needed in the future
      queryClient.invalidateQueries({ queryKey: ['contact-forms'] });
    },
  });
}
