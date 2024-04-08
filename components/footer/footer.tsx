const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-card py-4 px-6 mt-10">
      <span className="text-muted-foreground text-sm">
        {`Copyright @ ${currentYear} | réalisée par `}{" "}
        <a
          href="mailto:samatarbarkadleh111@gmail.com"
          target="_black"
          className="underline hover:text-primary transition-all duration-300"
        >
          {`Samatar Barkadleh - Mathematicien & Développeur web`}
        </a>
      </span>
    </div>
  );
};

export default Footer;
