'use client';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import balticSea from 'public/images/baltic-sea.jpg';
import dirty30 from 'public/images/dirty-30.jpg';
import engagement2 from 'public/images/engagement-2.jpg';
import florence from 'public/images/florence.jpg';
import silvester from 'public/images/silvester.jpg';
import summer from 'public/images/summer.jpg';
import ski from 'public/images/ski.jpg';
import surf from 'public/images/surf.jpg';
import { cn } from '@/lib/utils';
// flipping: https://etzold.co/blog/2021/10/22/flip-images-with-tailwindcss
import ConfettiExplosion from 'react-confetti-explosion';

const H1 = ({ children }) => (
  <div className="pb-3 justify-center items-start gap-2.5 inline-flex">
    <h1 className="text-orange-800 text-3xl font-bold font-bricolage leading-9">
      {children}
    </h1>
  </div>
);

const H2 = ({ children }) => (
  <div className="pt-8 pb-3 flex-col justify-start items-start flex">
    <div className="text-orange-700 text-lg font-bold font-['Inter'] leading-normal">
      {children}
    </div>
  </div>
);

const P = ({ children }) => (
  <div className="self-stretch h-20 pt-6 flex-col justify-start items-start flex">
    <div className="self-stretch text-center text-orange-600 text-xl font-normal font-['Inter'] leading-7">
      {children}
    </div>
  </div>
);

export default function GettingMarriedPage() {
  const [flipped, setFlipped] = useState([]);
  const [guessedRight, setGuessedRight] = useState([]);
  const [memoryVisible, setMemoryVisible] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  useEffect(() => {
    setMemoryVisible(true);
    setIsBlurred(false);
  }, []);

  const cards = [
    { img: balticSea, name: 'baltic' },
    { img: florence, name: 'florence' },
    { img: summer, name: 'summer' },
    { img: silvester, name: 'silvester' },
    { img: ski, name: 'ski' },
    { img: engagement2, name: 'engagement2' },
    { img: surf, name: 'surf' },
    { img: dirty30, name: 'dirty' },
  ];

  const duplicatedAndShuffledCards = useMemo(
    () => [...cards, ...cards].sort(() => Math.random() - 0.5),
    []
  );

  const handleFlip = (item, index) => {
    let newCard = { ...item, index };
    let recentFlipped = [...flipped, newCard];
    let sameClicked =
      [...flipped, ...guessedRight].filter((f) => f.index === index)?.length >
      0;

    if (sameClicked) {
      return;
    }
    // If 3 click, single card and turn the other two
    if (recentFlipped?.length > 2) {
      setFlipped([newCard]);
    } else {
      if (recentFlipped?.[0]?.name === recentFlipped?.[1]?.name) {
        setGuessedRight((prev) => [...prev, ...recentFlipped]);
      }
      setFlipped((prev) => [...prev, newCard]);
    }
  };

  return (
    <section className="flex flex-col items-center space-y-6 bg-orange-50 py-8">
      <div className="w-full sm:w-[450px] flex flex-col items-center">
        <div className="pb-8 flex-col justify-start items-center gap-4 flex">
          <HeartIcon />
          <div className="flex-col justify-start items-center flex">
            <div className="text-orange-600 text-[40px] font-extrabold font-bricolage font-['Bricolage Grotesque'] leading-9">
              Anni & Felippe
            </div>
          </div>
          <div className="flex-col justify-start items-center flex">
            <div className="self-stretch text-orange-600 text-2xl font-normal font-bricolage-semi leading-7">
              18. März 2024
            </div>
          </div>
        </div>
        <div className="relative w-full sm:h-[600px] h-[500px] overflow-hidden rounded-md">
          <Image
            alt=""
            src={engagement2}
            fill
            sizes="100vw"
            priority
            className={cn(
              'animate transform rounded-md object-cover grayscale blur-none duration-1000',
              { 'blur-sm scale-95': isBlurred }
            )}
          />
        </div>
        <div className="flex-col justify-start items-center flex">
          <div className="px-[3px] py-3 flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch text-justify text-orange-800 text-xl font-normal leading-7">
              <br />
              Am 18.03., genau 4 Jahre nach unserem ersten Date, machen wir
              ernst und heiraten!
              <br />
              <br />
              Wir freuen uns sehr, diesen besonderen Moment mit Euch zu teilen
              und im Anschluss gemeinsam mit leckerem Essen und Torte zu feiern.
              <br />
            </div>
          </div>

          <Divider />
          <div className="flex-col justify-start items-center flex">
            <H1>Ablauf</H1>
            <H2>Engster Familienkreis</H2>
            <Time
              {...{
                time: '11:30 Uhr',
                content: 'Ankunft Standesamt Charlottenburg-Wilmersdorf',
                address: 'Alt-Lietzow 28, 10587 Berlin',
                href: 'https://maps.app.goo.gl/SjGn4crFXux4YonC7',
              }}
            />
            <Time
              {...{
                time: '12:00 Uhr',
                content: 'Trauung',
              }}
            />

            <H2> Familie und Freunde</H2>
            <Time
              {...{
                time: '12:20 Uhr',
                content: 'Gemeinsames Anstoßen und Fotos vor dem Standesamt',
              }}
            />
            <Time
              {...{
                time: '14:00 Uhr',
                content:
                  'Mittagessen und Hochzeitstorte in der Trattoria Gusto',
                address: 'Bregenzer Str. 1, 10707 Berlin',
                href: 'https://maps.app.goo.gl/aqZ9hHa42M5q6CKu6',
              }}
            />
          </div>
          <Divider />
          <H1>Dresscode</H1>
          <P>Wir kommen in Kleid und Anzug. Schließt euch gerne an :)</P>

          <Divider />
          <H1>Memory(s)</H1>
          <P>Ein paar Erinnerungen zum Entdecken...</P>
        </div>
      </div>
      <Memory
        {...{
          duplicatedAndShuffledCards,
          memoryVisible,
          handleFlip,
          flipped,
          guessedRight,
        }}
      />
      <div className="pt-9 flex-col justify-center items-center">
        <HeartIcon />
      </div>
      <div className="text-orange-600 text-sm font-extrabold leading-9">
        Anni & Felippe
      </div>
    </section>
  );
}

function Time({
  time,
  content,
  href,
  address,
}: {
  time: string;
  content: string;
  href?: string;
  address?: string;
}) {
  return (
    <div className="self-stretch py-5 flex-col justify-center items-center gap-1.5 flex ">
      <div className="text-orange-700 text-base font-semibold font-['Inter'] leading-normal">
        {time}
      </div>
      <div className="self-stretch pb-[1px] justify-center items-center inline-flex">
        <div className="grow shrink basis-0 text-center text-orange-600 text-xl font-normal font-['Inter'] leading-7">
          {content}
        </div>
      </div>
      {href && (
        <LocationLink
          {...{
            address,
            href,
          }}
        />
      )}
    </div>
  );
}

function LocationLink({ address, href }) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full underline rounded-lg justify-center items-center text-orange-600   hover:text-orange-900 transition-all"
    >
      <div className="flex flex-row items-center space-x-1">
        <p className="text-sm">{address}</p> <Pin />
      </div>
    </a>
  );
}

function Pin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Memory({
  duplicatedAndShuffledCards,
  memoryVisible,
  handleFlip,
  flipped,
  guessedRight,
}) {
  const guessedPairs = guessedRight?.length;
  const isCompleted = guessedPairs > 0 && guessedPairs % 16 === 0;

  return (
    <>
      {isCompleted && <ConfettiExplosion />}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
        {/* <button onClick={() => setIsExploding((p) => !p)}>click</button> */}
        {duplicatedAndShuffledCards.map((item, index) => (
          <button
            key={`key-${Math.random()}`}
            className={cn(
              'relative aspect-square col-span-1 rounded-md bg-orange-200 opacity-0',
              memoryVisible && 'opacity-100 animate transform-all',
              `duration-[${100 * index}]`
            )}
            onClick={() => handleFlip(item, index)}
          >
            {(flipped?.filter((f) => f?.index === index)?.length > 0 ||
              guessedRight?.filter((f) => f?.name === item.name)?.length >
                0) && (
              <Image
                alt=""
                src={item.img}
                fill
                sizes="25vw"
                priority
                className="object-cover animate rounded-md duration-300 transform -scale-x-100"
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

function Divider() {
  return (
    <div className="py-14">
      <svg
        width="100"
        height="14"
        viewBox="0 0 100 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.6534 8.27817C22.3572 9.52376 17.3969 10.7634 12.6251 11.0729C8.54661 11.3371 4.60713 10.9267 1.38261 9.18088C0.92807 8.93506 0.35886 9.10405 0.11304 9.55897C-0.133155 10.0135 0.0362193 10.5827 0.490762 10.8289C4.00832 12.7329 8.29742 13.2309 12.7462 12.9424C17.6038 12.6276 22.6536 11.3798 27.036 10.1162C27.5445 11.1463 28.5975 12.1067 30.4524 12.8153C33.3014 13.9039 37.1915 13.8904 41.2895 13.277C47.233 12.3878 53.6266 10.2672 57.7373 8.76043C57.906 8.69898 58.157 8.60118 58.4643 8.47228C58.558 8.67912 58.6629 8.88298 58.7791 9.08308C59.7871 10.8271 61.5708 12.2371 63.3882 12.7408C74.9148 15.9342 88.3675 12.1079 99.3207 8.99388C99.8154 8.85261 100.104 8.33401 99.9652 7.83675C99.8229 7.33948 99.3057 7.05057 98.8074 7.19184C88.1614 10.2189 75.0909 14.0381 63.8866 10.935C62.5076 10.5527 61.1661 9.46904 60.4016 8.14551C60.3154 7.99787 60.2405 7.84686 60.1693 7.69359C61.6795 6.94527 63.4557 5.90203 64.4112 4.78535C65.393 3.64056 65.6366 2.41858 64.7822 1.26442C64.0477 0.277766 62.9348 0.193825 61.7769 0.705327C60.529 1.25318 59.2437 2.53397 58.8278 3.13503C58.0483 4.25771 57.801 5.47559 57.9434 6.6631C57.5762 6.81823 57.2779 6.93364 57.0939 7.00109C53.0731 8.47451 46.8238 10.5543 41.0122 11.424C37.2728 11.9838 33.7207 12.0584 31.1209 11.0654C30.0121 10.6416 29.2795 10.1469 28.8819 9.57285C29.6666 9.33827 30.4232 9.10744 31.146 8.8871C32.5756 8.45129 35.552 7.72995 37.6786 6.44426C39.3697 5.42201 40.5164 4.0314 40.4497 2.28817C40.4156 1.39257 39.8974 0.794876 39.0726 0.45987C37.8401 -0.0403896 35.7087 0.201679 34.915 0.370305C32.5078 0.880683 29.2949 2.9934 27.7053 5.37404C27.0709 6.32397 26.6935 7.31774 26.6534 8.27817ZM28.6308 7.69284C29.311 7.48824 29.9682 7.28738 30.5997 7.09477C31.9341 6.68782 34.7235 6.04141 36.7092 4.84079C37.7607 4.20525 38.6192 3.44382 38.5776 2.35974C38.5742 2.27542 38.4906 2.25145 38.4168 2.21697C38.3025 2.16414 38.1717 2.12778 38.0323 2.0993C37.0891 1.90669 35.8222 2.09292 35.3036 2.20309C33.2838 2.6314 30.597 4.41698 29.2634 6.41464C28.9816 6.83659 28.7571 7.2664 28.6308 7.69284ZM59.7946 5.80048C60.6752 5.34743 61.597 4.79957 62.324 4.20338C62.7099 3.88674 63.036 3.56111 63.2421 3.22311C63.4144 2.94357 63.4819 2.65726 63.2758 2.38071C63.1933 2.26867 63.0697 2.26643 62.9423 2.28742C62.8074 2.3099 62.6687 2.35785 62.5301 2.41968C61.6157 2.82214 60.6714 3.76233 60.3679 4.20338C60.0119 4.71488 59.8358 5.256 59.7946 5.80048Z"
          fill="#EA580C"
        />
      </svg>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.151 21.161C9.65719 21.1837 7.23913 17.0173 6.4161 15.8667C5.21622 14.1891 5.22517 14.1934 3.98921 12.5334C3.0741 11.3044 2.00009 10.0359 1.35924 8.6419C1.18232 8.25701 0.836875 7.25197 0.750212 7.00426C0.265999 5.6203 -0.295927 4.00157 0.18125 2.53872C0.503825 1.54989 1.74714 1.3578 2.67045 1.37082C4.88981 1.40217 6.77874 2.77458 8.02815 4.46237C8.71255 5.38686 9.15438 6.41961 9.66389 7.43938C9.80215 7.71609 9.9489 7.98872 10.0906 8.26377C10.1544 8.38751 10.213 8.51375 10.2803 8.63571C10.3239 8.71482 10.3656 8.79604 10.4228 8.86658C10.4462 8.89543 10.4948 8.95739 10.5174 8.9279C10.6191 8.79465 10.6635 8.62793 10.7235 8.47285C10.9479 7.89239 11.1827 7.03802 11.3708 6.50046C11.5203 6.07316 11.8086 5.42413 12.0365 5.03682C12.3362 4.52777 12.6395 4.01928 12.983 3.53678C13.3268 3.05374 13.7112 2.59842 14.0953 2.14458C14.2766 1.93029 14.4766 1.7311 14.6777 1.53399C15.5505 0.678634 16.8395 -0.302388 18.1746 0.088435C19.7253 0.542356 20.051 2.45622 19.9939 3.79819C19.9744 4.25725 19.9458 4.71702 19.8815 5.17227C19.2691 9.50451 16.9642 13.4014 14.5475 17.0117C14.2098 17.5161 12.0887 21.1465 11.151 21.161Z"
        fill="#EA580C"
      />
    </svg>
  );
}
