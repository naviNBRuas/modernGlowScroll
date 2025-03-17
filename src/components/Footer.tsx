
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-4">Minimal</h3>
            <p className="text-sm opacity-70">
              A beautifully crafted interface for those who appreciate simplicity and elegance.
            </p>
          </div>
          
          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Case Studies', 'Documentation'],
            },
            {
              title: 'Company',
              links: ['About', 'Careers', 'Blog', 'Press'],
            },
            {
              title: 'Resources',
              links: ['Community', 'Contact', 'Privacy', 'Terms'],
            },
          ].map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-80">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm opacity-70 hover:opacity-100 transition-all-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-60 mb-4 md:mb-0">
            © {currentYear} Minimal. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Twitter', 'Instagram', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs opacity-60 hover:opacity-100 transition-all-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
