export const WHATSAPP_NUMBER = "5521980870945";

export const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
