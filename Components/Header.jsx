const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper backdrop-blur-sm border-b-2 border-foreground">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary border-2 border-foreground flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">
                C
              </span>
            </div>
            <span className="font-display font-semibold text-lg hidden sm:block">
              Classroom Support
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-4">
            <a
              href="#how-it-works"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              How it works
            </a>
               <button className="px-4 py-2 text-lg font-semibold border-2 border-black bg-green text-white shadow-brutal">
                Try now 
              </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

