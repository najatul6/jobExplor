import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <h2 className="text-3xl uppercase font-bold">Job Explore</h2>
        <p>
          There are many variations of passages <br /> of Lorem Ipsum , but the
          majority have <br /> suffered alteration in some form.
        </p>
        <div className="grid grid-flow-col gap-4">
          <a>
          <FaFacebookF />
          </a>
          <a>
            
          </a>
          <a>
            
          </a>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
