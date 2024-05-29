import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
const CostumNavbar = () => {
    const handleClick = (event) => {
        event.stopPropagation();
    }
    return (
        <>
            <nav class="navbar">
                <div class="container-fluid">

                    <span class="navbar-brand" href="#">
                        <Link to="/"><img src={logo} /></Link>
                    </span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <img src={bars} />
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <Link to="/"><h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nizam Tax Consultancy</h5></Link>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <span class="nav-link"><Link to='/'><i class="fa-solid fa-house" style={{ marginRight: "5px" }}></i>Home</Link></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link"><Link to='/about'><i class="fa-solid fa-circle-info" style={{ marginRight: "5px" }}></i>About Us</Link></span>
                                </li>
                                <li class="nav-item dropdown">
                                    <span class="nav-link dropdown-toggle text-primary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-list-check"></i> Services
                                    </span>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-submenu">
                                            <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>GST</span>
                                            <ul class="dropdown-menu">
                                                <li><span class="dropdown-item"><Link to="/gst-registration">GST Registration</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/gst-returns">GST Returns</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/income-tax">GST Audits</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/accounting">GST Refund</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">GSTR 9 & 9c</Link></span></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>Registration</span>
                                            <ul class="dropdown-menu">
                                                <li><span class="dropdown-item"><Link to="/private-limited-company">Private Limited Company</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/limited-liability-partnership">Limited Liability PARTNERSHIP(LLP)</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/one-person-company">One Person Company</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/accounting">Director Identification Number(DIN)</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/partnership-firm">Partnership Firm Registration</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/employee-state-insurance">Employee State Insurance(ESIC)</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/import-export-code">Import & Export Code(IEC)</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/msme">MSME Registration</Link></span></li>
                                                <li class="dropdown-submenu">
                                                    <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>Licenses</span>
                                                    <ul class="dropdown-menu">
                                                        <li><span class="dropdown-item"><Link to="/trade-license">Trade License</Link></span></li>
                                                        <li><span class="dropdown-item"><Link to="/food-license">Food License</Link></span></li>
                                                        <li><span class="dropdown-item"><Link to="/income-tax">Labour Audits</Link></span></li>
                                                    </ul>
                                                </li>
                                                <li><span class="dropdown-item"><Link to="/12A">12A for Trust</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/80G">80G for Trust</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Society & Trust Registration</Link></span></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>Income Tax Returns</span>
                                            <ul class="dropdown-menu">
                                                <li><span class="dropdown-item"><Link to="/gst">Salaried Employee ITR</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/registration">Business Income Tax Returns</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/accounting">Tax Audits & ROC Filing</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/income-tax">Refund Claims</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Refund Claims</Link></span></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>Accounting & Book Keeping</span>
                                            <ul class="dropdown-menu">
                                                <li><span class="dropdown-item"><Link to="/book-keeping-and-accounting">Book Keeping & Accounting</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/payroll">Payroll Management</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/accounting">Bank Reconciliation Statement</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Accounts Receivable</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Account Payable</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Financial Reporting</Link></span></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <span class="dropdown-item dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>Other Supportive Services</span>
                                            <ul class="dropdown-menu">
                                                <li><span class="dropdown-item"><Link to="/digital-signature">Digital Signatures</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/registration">PAN & TAN Services</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/income-tax">Project Reports</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/accounting">Turnover Certificates</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Business Projections</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Internal Audits</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Bank Loan Assistance</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Director KYC</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Company Name Approval</Link></span></li>
                                                <li><span class="dropdown-item"><Link to="/supportive-services">Director Addition & Deletions</Link></span></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link"><Link to="/contactUS"><i class="fa-solid fa-phone" style={{ marginRight: "5px" }}></i>Contact Us</Link></span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}
export default CostumNavbar;