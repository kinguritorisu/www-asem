import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div lang="en">
      <Head>
        <title>Create Next App</title >
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://example.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <hero className="flex flex-col">
        <header>
          <div className="container mx-auto flex flex-row items-center py-8 py-4">
            <logo>
              <a href="/">
                <Image src="/images/logo-asem.svg" alt="asem logo" width={200} height={56}></Image>
              </a>
            </logo>
            <nav className="flex-grow px-24">
              <ul className="flex justify-center text-white">
                <li className="px-2">
                  <a href="/facultati">Facultati</a>
                  <ul>
                    <li><a href="/facultati"></a></li>
                  </ul>
                </li>
                <li className="px-2">
                  <a href="/facultati">Prezentare</a>
                  <ul>
                    <li><a href="/facultati"></a></li>
                  </ul>
                </li>
                <li className="px-2">
                  <a href="/facultati">Cercetare</a>
                  <ul>
                    <li><a href="/facultati"></a></li>
                  </ul>
                </li>
                <li className="px-2">
                  <a href="/facultati">Relatii internationale</a>
                  <ul>
                    <li><a href="/facultati"></a></li>
                  </ul>
                </li>
                <separator></separator>
                <li className="px-2"><a href="">Student ASEM</a></li>
              </ul>
            </nav>
            <a href="/" className="w-36 h-36 rounded-full bg-white flex items-center">
              <span className="px-4 text-lg text-center text-blue-800 font-extrabold transform rotate-6">
                Devino STUDENT ASEM
              </span>
            </a>
          </div>
        </header>
        <heroContent className="container mx-auto grid grid-cols-2 gap-4">
          <heroleft className="flex flex-col my-8 mb-24">
            <h1 className="font-extrabold text-6xl text-white mb-6">
              Studii superioare pentru toți
            </h1>
            <description className="text-white">
              Educarea unei noi mentalități în spiritul libertății de gândire și acțiune, al pragmatismului și eficientei vieții.
            </description>
            <a href="/" className="my-4 p-4 bg-white self-start rounded-xl text-base text-center text-blue-800 font-extrabold">
              Aplica ACUM!
            </a>
          </heroleft>
          <heroImg>
            <Image src="/" alt="hero image" width={'auto'} height={'auto'}></Image>
          </heroImg>
        </heroContent>
      </hero>

      <partners>
        <div className="container mx-auto my-28 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500">Partenerii nostri de incredere</span>
          <ul className="grid grid-cols-4 gap-16 relative">
            <li className="flex my-4"><a style={{height: '80px', padding: '24px'}}><Image src="/images/partner-1.png" alt="partner 1" width={'auto'} height={56}></Image></a></li>
            <li className="flex my-4"><a style={{height: '80px', padding: '24px'}}><Image src="/images/partner-2.png" alt="partner 2" width={'auto'} height={56}></Image></a></li>
            <li className="flex my-4"><a style={{height: '80px', padding: '24px'}}><Image src="/images/partner-3.png" alt="partner 3" width={'auto'} height={56}></Image></a></li>
            <li className="flex my-4"><a style={{height: '80px', padding: '24px'}}><Image src="/images/partner-4.png" alt="partner 4" width={'auto'} height={56}></Image></a></li>
          </ul>
        </div>
      </partners>

      <faculties>
        <div className="container mx-auto my-36 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold mb-4">Facultati ASEM</h1>
          <description className="text-center text-gray-500 text-base">Your desire to keep forward require a university with standards as high as yours. ASEM is the first economic university in Republic of Moldova thanks to highly engaging degree programs and world-class faculties which are driven to help you be your best.</description>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-1.png" alt="faculty 1" layout="fill" objectFit="cover" objectPosition="center"></Image>
         .       </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Business si Administrarea Afacerilor</span>
              </a>
            </div>
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-2.png" alt="faculty 2" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Economie Generala si Drept</span>
              </a>
            </div>
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-3.png" alt="faculty 3" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Finante</span>
              </a>
            </div>
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-4.png" alt="faculty 4" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Contabilitate</span>
              </a>
            </div>
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-5.png" alt="faculty 5" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Tehnologii Informationale si Statistica Economica</span>
              </a>
            </div>
            <div>
              <a className="relative flex items-end rounded-2xl shadow-xl transform transition-all hover:shadow-2xl hover:scale-105" style={{height:"300px", overflow: 'hidden'}} href="/">
                <div className="z-0">
                  <Image src="/images/faculty-6.png" alt="faculty 6" layout="fill" ></Image>
                </div>
                <span className="z-10 text-white p-8 text-2xl font-extrabold">Relatii Economice Internationale</span>
              </a>
            </div>
          </div>
        </div>
      </faculties>

      <news>
        <div className="container mx-auto my-36">
          <div className="flex flex-row justify-between items-end my-4">
            <h1 className="font-extrabold text-4xl">Noutati</h1>
            <a className="text-base font-medium text-blue-400" href="/">Toate noutatile</a>
          </div>
          <hr className="mb-6"></hr>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
                <div className="flex flex-col">
                  <div className="relative flex items-end rounded-2xl shadow-xl mb-6" style={{height:"500px", overflow: 'hidden'}}>
                    <Image src="/images/main-article.png" alt="news 1" layout="fill" objectFit="cover" objectPosition="center"></Image>
                  </div>
                  <span className="text-left text-blue-500 text-sm font-medium">Erasmus</span>
                  <h1 className="my-4 font-extrabold text-4xl">Proiectele Internationale Erasmus+ in derulare la ASEM</h1>
                  <p className="text-gray-500">
                    Cu prilejul Zilei Europei, sărbătorită în fiecare an în data de 9 Mai, aducem la cunoștința întregii comunități academice, proiectele internaționale din cadrul programului Erasmus+, co-finanțate de către Comisia Europeană în derulare la Academia de Studii Economice din Moldova.
                  </p>
                  <a className="bg-blue-50 my-4 py-2 px-6 bg-white self-start rounded-xl text-base text-center text-blue-500 font-medium" href="/">
                    Detalii
                  </a>
                </div>
            </div>
            <div className="col-span-4">
              <div className="flex flex-row mb-6">
                <div className="relative rounded-2xl mr-6 flex-shrink-0" style={{height: '150px', width: '150px', overflow: 'hidden'}}>
                  <Image src="/images/article-1.png" alt="news 2" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-left text-yellow-500 text-sm font-medium">Student</span>
                    <h1 className="font-bold">Metodologia de susținere online a tezei de licență/master în ASEM în condițiile impuse de Pandemia COVID-19</h1>
                  </div>
                  <a className="font-medium underline self-start" href="/">
                    Detalii
                  </a>
                </div>
              </div>
              <div className="flex flex-row mb-6">
                <div className="relative rounded-2xl mr-6 flex-shrink-0" style={{height: '150px', width: '150px', overflow: 'hidden'}}>
                  <Image src="/images/article-2.png" alt="news 3" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-left text-red-600 text-sm font-medium">Noutate</span>
                    <h1 className="font-bold">Masa Rotundă “Sporirea Rolului Uniunii Europene în Parteneriatul Estic”</h1>
                  </div>
                  <a className="font-medium underline self-start" href="/">
                    Detalii
                  </a>
                </div>
              </div>
              
              <div className="flex flex-row mb-6">
                <div className="relative rounded-2xl mr-6 flex-shrink-0" style={{height: '150px', width: '150px', overflow: 'hidden'}}>
                  <Image src="/images/article-3.png" alt="news 4" layout="fill" objectFit="cover" objectPosition="center"></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-left text-green-400 text-sm font-medium">Conferinta</span>
                    <h1 className="font-bold">The 4th International Conference on Economics and Socials Sciences</h1>
                  </div>
                  <a className="font-medium underline self-start" href="/">
                    Detalii
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </news>

      <about>
        <div className="container mx-auto my-36">
          <h1 className="text-center text-4xl font-extrabold mb-4">Despre ASEM</h1>
          <p className="text-center text-gray-500">
            ASEM este un brand academic de mare mândrie pentru cca 70 de mii de absolvenţi din 1992 încoace. În prezent, la ASEM, îşi fac studiile peste 7000 de studenţi și activează 20 de doctori habilitaţi și peste 150 de doctori în ştiinţe.
            <br></br><br></br>
            Activitatea de cercetare este organizată în ASEM în cadrul Institutului de Cercetări Economice și Studii Europene, a departamentelor ASEM, precum și în 14 Laboratoare și Centre de cercetare, iar rezultatele acesteia sunt publicate în 2 reviste științifice: „Economica” și „Eastern European Journal of Regional Studies”.
            <br></br><br></br>
            Procesul de studii în Academia de Studii Economice din Moldova este realizat în cadrul a 6 facultăţi (ciclul-I, Licență) de peste 300 cadre științifico-didactice și didactice din 15 departamente; o Școala Masterală (ciclul II, Masterat), două Școli Doctorale (ciclul-III, Doctorat), precum și Colegiul Național de Comerț al ASEM, iar abilitățile practice pot fi însușite și dezvoltate în cadrul a 2 Incubatoare de Afaceri, a Centrului de Business al ASEM și Școlii de Formare Continuă.
            <br></br><br></br>
            ASEM este alături de beneficiarii săi interni și externi prin asigurarea unor servicii educaționale și de cercetare de calitate prin suportul acordat de Biblioteca științifică ASEM, cu cele 4 săli de lectură moderne, Centrul Multimedia, Restaurantul-didactic, Studioul TV etc. și prin prestarea mai multor servicii sociale, cultural-artistice și sportive de către cele două Complexe sportive moderne, Centrul Curativ-consultativ, cantinele și căminele studențești etc.
          </p>
          <div className="relative flex items-center rounded-2xl shadow-xl text-center my-6" style={{height:"525px", overflow: 'hidden'}} href="/">
            <div className="z-0">
              <Image src="/images/tour.png" alt="tour" layout="fill" objectFit="cover" objectPosition="center"></Image>
            </div>
            <div className="flex flex-col flex-1 z-10">
              <h1 className="text-white text-6xl font-extrabold">
                Turul Virtual ASEM
              </h1>
              <a className="text-white font-bold self-center flex items-center my-6 py-3 px-6 border-2 border-white rounded-xl" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                <span className="ml-2">Acceseaza</span>
              </a>
            </div>
          </div>
        </div>
      </about>

      <testimonials>
        <div className="container mx-auto my-36">
          <h1 className="text-center font-extrabold text-4xl mb-12">Ce spun studenții despre ASEM?</h1>
          <div className="relative flex items-center rounded-2xl shadow-xl my-6 grid grid-cols-12" style={{height:"500px", overflow: 'hidden'}}>
            <div className="z-0">
              <Image src="/images/testimonial-1.png" alt="testimonial 1" layout="fill" objectFit="cover" objectPosition="end"></Image>
            </div>
            <div className="z-10 col-start-2 col-end-7 text-white">
              <h1 className="text-3xl font-bold mb-4">
                Cea mai bună instituție superioară
              </h1>
              <p className="text-lg italic mb-6">
                Cu prilejul Zilei Europei, sărbătorită în fiecare an în data de 9 Mai, aducem la cunoștința întregii comunități academice, proiectele internaționale din cadrul programului Erasmus+, co-finanțate de către Comisia Europeană în derulare la Academia de Studii Economice din Moldova.
              </p>
              <p className="text-lg italic">
                <b>Chioke Chinasa,</b><br></br>Cibernetica si Statistica Economica
              </p>
            </div>
          </div>
          <div className="relative flex items-center rounded-2xl shadow-xl my-6 grid grid-cols-12" style={{height:"500px", overflow: 'hidden'}}>
            <div className="z-0">
              <Image src="/images/testimonial-2.png" alt="testimonial 2" layout="fill" objectFit="cover" objectPosition="end"></Image>
            </div>
            <div className="z-10 col-start-6 col-end-12 text-white">
              <h1 className="text-3xl font-bold mb-4">
                Profesori excelenți și obiecte interesante
              </h1>
              <p className="text-lg italic mb-6">
                Cu prilejul Zilei Europei, sărbătorită în fiecare an în data de 9 Mai, aducem la cunoștința întregii comunități academice, proiectele internaționale din cadrul programului Erasmus+, co-finanțate de către Comisia Europeană în derulare la Academia de Studii Economice din Moldova.
              </p>
              <p className="text-lg italic">
                <b>Chioke Chinasa,</b><br></br>Cibernetica si Statistica Economica
              </p>
            </div>
          </div>
        </div>
      </testimonials>

      <convert>
        <div className="container mx-auto flex flex-col my-36">
          <h1 className="text-center text-4xl font-extrabold mb-4">Ești deja gata să devii student ASEM?</h1>
          <p className="text-center text-gray-500">
            Aplică ușor online la instituția superioară ASEM, iar noi avem grijă de restul
          </p>
          <a href="/" className="my-4 p-4 bg-white self-center rounded-xl text-base text-center text-white bg-blue-800 font-extrabold">
            Aplica ACUM!
          </a>
        </div>
      </convert>

      <footer>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-12">
            <ul>
              <h5 className="text-sm font-bold">Facultăți</h5>
              <li><a className="text-sm text-gray-500" href="/">Business și Administrarea Afacerilor</a></li>
              <li><a className="text-sm text-gray-500" href="/">Economie Generală și Drept</a></li>
              <li><a className="text-sm text-gray-500" href="/">Finanțe</a></li>
              <li><a className="text-sm text-gray-500" href="/">Contabilitate</a></li>
              <li><a className="text-sm text-gray-500" href="/">Tehnologii Informaționale și Statistică Economică</a></li>
              <li><a className="text-sm text-gray-500" href="/">Relații Economice Internaționale</a></li>
            </ul>
            <ul>
              <h5 className="text-sm font-bold">Prezentare</h5>
              <li><a className="text-sm text-gray-500" href="/">Scurt istoric</a></li>
              <li><a className="text-sm text-gray-500" href="/">Parteneri</a></li>
              <li><a className="text-sm text-gray-500" href="/">Conferințe</a></li>
              <li><a className="text-sm text-gray-500" href="/">Comisia de etică</a></li>
              <li><a className="text-sm text-gray-500" href="/">Codul de etică al ASEM</a></li>
              <li><a className="text-sm text-gray-500" href="/">Structura organizatorică a ASEM</a></li>
            </ul>
            <ul>
              <h5 className="text-sm font-bold">Prezentare</h5>
              <li><a className="text-sm text-gray-500" href="/">Orarul lecțiilor</a></li>
              <li><a className="text-sm text-gray-500" href="/">Reușita</a></li>
              <li><a className="text-sm text-gray-500" href="/">Biblioteca științifică ASEM</a></li>
              <li><a className="text-sm text-gray-500" href="/">Oportunități/programe și burse</a></li>
              <li><a className="text-sm text-gray-500" href="/">Dezvoltarea profesională</a></li>
              <li><a className="text-sm text-gray-500" href="/">Informații utile</a></li>
              <li><a className="text-sm text-gray-500" href="/">Evenimente</a></li>
            </ul>
            <ul>
              <h5 className="text-sm font-bold">Informații utile</h5>
              <li><a className="text-sm text-gray-500" href="/">Contacte</a></li>
              <li><a className="text-sm text-gray-500" href="/">Termeni și Condiții</a></li>
              <li><a className="text-sm text-gray-500" href="/">Politica de confidențialitate</a></li>
              <li><a className="text-sm text-gray-500" href="/">Poștă ASEM</a></li>
            </ul>
          </div>
          
          <div className="mt-28 mb-12 flex">
            <a
              className="text-center self-center mx-auto text-sm text-gray-500"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Copyright © 2021 ASEM. All rights reserved
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
