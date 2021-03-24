export default function Footer() {
    return (
        <div className="footer">
            <svg id="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 200">
                <path
                    fill="#171717"
                    fillOpacity="1"
                    d="M0,288L40,266.7C80,245,160,203,240,176C320,149,400,139,480,138.7C560,139,640,149,720,165.3C800,181,880,203,960,197.3C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                />
            </svg>
            <div className="footer-gap footer-font footer-div footer-text footer-flex">
                <div>&#169; Fiveable 2021 | All Rights Reserved.</div>
                <div>Docs</div>
                <div>Contributors</div>
                <div>
                    <a href="https://hi.fiveable.me/contact/">Contact Us</a>
                </div>
                <div>
                    <a href="https://hi.fiveable.me/privacy-policy/">Privacy</a>
                </div>
                <div>
                    <a href="https://hi.fiveable.me/terms-of-use/">Terms and Conditions</a>
                </div>
            </div>
        </div>
    );
}