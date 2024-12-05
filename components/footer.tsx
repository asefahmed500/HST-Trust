export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Hossain Sharif Talukdar Ad-Deen Foundation is dedicated to serving society
              through religious and charitable initiatives.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/donate" className="text-sm text-muted-foreground hover:text-foreground">
                  Make a Donation
                </a>
              </li>
              <li>
                <a href="/guidance" className="text-sm text-muted-foreground hover:text-foreground">
                  Religious Guidance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: contact@hstfoundation.org
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +880 1234-567890
              </li>
              <li className="text-sm text-muted-foreground">
                Address: Dhaka, Bangladesh
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hossain Sharif Talukdar Ad-Deen Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}