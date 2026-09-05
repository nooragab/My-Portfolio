import { ResumeCard } from "@/components/portfolio/resume-card";

interface Certificate {
  title: string;
  issuer: string;
  href?: string;
  logoUrl: string;
  date: string;
}

interface CertificatesProps {
  certificates: readonly Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="flex flex-col gap-y-3">
      {certificates.map((certificate) => (
        <ResumeCard
          key={certificate.title}
          href={certificate.href}
          logoUrl={certificate.logoUrl}
          altText={certificate.issuer}
          title={certificate.title}
          subtitle={certificate.issuer}
          period={certificate.date}
        />
      ))}
    </div>
  );
}
