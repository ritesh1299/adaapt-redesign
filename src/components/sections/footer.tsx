import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8f836604-9699-4891-af5e-125a19006cfb-adaapt-ai/assets/svgs/logo-color-1.svg?"
                  alt="Adaapt Logo"
                  width={130}
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Empowering businesses with AI solutions
              </p>
              <div className="flex space-x-5 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Phone</span>
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQs</Link></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
                  <li><Link href="/pricing-policy" className="text-sm text-muted-foreground hover:text-foreground">Pricing Policy</Link></li>
                  <li><Link href="/cancellation-policy" className="text-sm text-muted-foreground hover:text-foreground">Cancellation Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                  <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">US Office</p>
                    <p>651 N Broad St Suite 206, Middletown, Delaware - 19709</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">India Office</p>
                    <p>5th Floor, 91 SpringBoard, Garudcharpalya, Mahadevapura, Bangalore - 560048</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-y-4">
            <p className="text-xs text-muted-foreground">
              © 2025 TerobotsEnterprise.AI Private Limited. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;