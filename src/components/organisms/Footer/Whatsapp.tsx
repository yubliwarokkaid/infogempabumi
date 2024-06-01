import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6">
        <FloatingWhatsApp
          phoneNumber="085888212808"
          accountName="Yubli Audy Warokka"
          chatMessage="Selamat datang... Ada yang bisa saya bantu?"
          statusMessage="Online"
          notification
          placeholder="Ketik pesan.."
        />
      </div>
    </section>
  );
}
