type HeroSectionProps = {
    title: string;
    subtitle: string;
  };
  
  export function HeroSection({ title, subtitle }: HeroSectionProps) {
    return (
      <div className="text-center py-16 px-6 bg-gray-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    );
  }
  