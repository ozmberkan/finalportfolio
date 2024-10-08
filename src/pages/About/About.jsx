import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-grow flex-col gap-y-6 p-12 ">
      <h1 className="text-4xl font-semibold">Hakkımda</h1>
      <div className="flex flex-col gap-y-7">
        <h1 className="text-2xl font-semibold text-zinc-400 ">
          Ben bir Ön Uç Geliştirici & Tasarımcı olarak dijital projelere hayat
          veriyorum. 2024 yılında Dokuz Eylül Üniversitesi ‘Çalışma Ekonomisi ve
          Endüstri İlişkileri’ bölümünden mezun oldum ve 1.5 yıldır yazılım
          dünyasında aktif olarak yer alıyorum. İzmir’de yaşıyorum ve her geçen
          gün kendimi daha da geliştirerek React, TailwindCSS, Figma, Photoshop
          gibi teknolojilerde yetkinleşiyorum. Pixel-perfect tasarım anlayışım
          ile çalışmayı seviyor, hem kodlama hem de tasarım konusunda detaylara
          büyük önem veriyorum. Takım çalışmasına yatkınım ve güçlü iletişim
          becerilerimle katkıda bulunuyorum. React konusunda derinleşerek
          uzmanlaşma yolunda ilerliyorum. Henüz bir yazılım sektöründe
          profesyonel deneyimim olmasa da, sürekli kendimi eğiterek projeler
          geliştiriyorum ve bu projeleri düzenli olarak güncelliyorum.
        </h1>
        <Link
          to="/projects"
          className="bg-neutral-900 text-white hover:ring-2 ring-offset-2 ring-offset-black ring-neutral-700 transition-all duration-500 w-44 flex justify-center items-center p-2 rounded-md "
        >
          Projelerime göz at!
        </Link>
      </div>
    </div>
  );
};

export default About;
