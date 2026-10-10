import { whatsappData } from '@/data/content';

export function getWhatsAppUrl(
    phone = whatsappData.phone,
    message = whatsappData.message,
): string {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
