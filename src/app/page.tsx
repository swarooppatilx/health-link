import Image from 'next/image';
import Link from 'next/link';

export default function NHSIntro() {
  return (
    <div className="flex items-center justify-center h-screen bg-nhs-blue">
      <div className="text-center">
        <div className="">
          <Image
            src="/nhs-logo.png" // Replace with your actual NHS logo path
            alt="NHS Logo"
            height={350}
            width={350}
            className="mx-auto mt-52"
          />
        </div>
        <p className="text-white mt-60 mb-5 text-base font-bold">
          Access your health services
        </p>
        <Link href="/home">
          <button className="bg-white text-nhs-blue font-bold py-2 px-8 rounded">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
