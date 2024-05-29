import document from '../../assets/document.png';
const Digital = () => {
    return (
        <div>
            <p>A Digital Signature Certificate (DSC) is a secure digital key that certifies the identity of the holder, issued by a Certifying Authority (CA). It typically contains your identity (name, email, country, APNIC account name and your public key). A digital signature is an electronic form of a signature that can be used to authenticate the identity of the sender of a message or the signer of a document. From 1st January 2021 onwards only Class III DSC are issued throughout India.</p>
            <h3 class="mb-2">Who issues Digital Signature Certificate</h3>
            <p>Indian Government recognised digital signatures under the Information Technology Act, 2000. The Controller of Certifying Authorities (CCA) has been appointed by the Central Government under section 17 of the Act for purposes of the IT Act. It aims at promoting the growth of E-Commerce and E-Governance through the wide use of digital signatures. The CCA issues licenses to Certifying Authorities in India to generate Digital Signatures. The Certifying Authorities (CA) issues Digital Signatures through their Registering Authorities (RA). There are 15 Certifying Authorities as of now and eMudhra and Capricorn are videly used in India. CompaniesHouse is one of the Registering Authority to process the Digital Signatures in India.</p>
            <p class="imp">With effect from 1st January 2021, only Class-III Digital Sinatures are issued in India.</p>
            <h3 >Types of Class-III Digital Signature Certificates</h3>
            <p>Class-III DSC can be issued in two categories: (1) Signing and (2) Signing & Encription.</p>
            <ul class="right-unordered">
                <li class="mb-2"><b>Class-III Signing Certificate:</b> Signing Certificate can only be used for signing the document(s). Ex. A Chartered Accountant, Company Secretary, Cost Accountant, Bank Officials, Director of a Company or Designated Partner of an LLP can use the DSC for signing the documents for the purpose of filing with MCA, GST, Income Tax, PF, ESI, IEC & Trademark registrations and Returns.</li>
                <li class="mb-2"><b>Class-III Signing & Encription Certificates: </b>Encprition Certificate provides protection to encprited document/information over the transmission document/information on internet. These are used for participating in e-Tendering, e-Procurement Platforms.
                </li>
            </ul>
            <p>Class-III DSC can be issued to Individuals as well as Organisations.</p>
            <h3 class="mb-2">What is the validity period of DSC</h3>
            <p>Class-III DSC may be taken for a period of two or three years. Upon completion of the period of validity, they need to renew it.</p>
            <h3>Who needs to take Digital Signature Certificate</h3>
            <ul class="right-unordered">

                <li class="mb-2">A Chartered Accountant - Class-III Signing.</li>

                <li class="mb-2">A Company Secretary - Class-III Signing.</li>

                <li class="mb-2">A Cost Accountant - Class-III Signing.</li>

                <li class="mb-2">Bank Officials - Class-III Signing.</li>

                <li class="mb-2">A Director of a Company - Class-III Signing or Signing & Encpription.</li>

                <li class="mb-2">A Designated Partner of an LLP - Class-III Signing or Signing & Encpription.</li>

                <li class="mb-2">Any Authorised Signatory of an Organisation - Class-III Signing or Signing & Encription.</li>

                <li class="mb-2">An Organisation can usually take Class-III Signing & Encription.</li>
            </ul>
            <h3 class="mt-5">Documents Required for Digital Signature Certificate</h3>
            <h5 class="mt-4 text-primary"><span class="me-3"><img src={document} /></span>
                For an Individual
            </h5>
            <ol class="ms-3">
                <li>PAN</li>
                <li>Internationla Passport in case of Foreign Individual duly attested</li>
                <li>Aadhar/Voter Id/Passport</li>
                <li>Passport size photo</li>
                <li>Mobile Number</li>
                <li>Email Id</li>
            </ol>
            <h5 class="mt-4 text-primary"><span class="me-3"><img src={document} /></span>
                For an Organisation
            </h5>
            <ol class="ms-3">
                <li>PAN Card</li>
                <li>GST Certificate</li>
                <li>Certificate of Incorporation/Registration</li>
                <li>Recent Bank Statement</li>
                <li>List of Directors/Partners</li>
                <li>Authorisation Letter</li>
                <li>Board Resolution</li>
                <li>Autorised Signatory Id and Address Proofs</li>
                <li>Directors/Partners Id and Address Proofs</li>
                <li>Passport size photograph of Authorised Signatory</li>
                <li>Passport size photographs of Directors/Partners</li>
                <li>Mobile Number for Organisation</li>
                <li>Email id for organisation</li>
            </ol>
            <h3 class="mt-3">DSC Issuance Process</h3>
            <ol>
                <li class="font-weight-bold text-primary">Preparation of Documents</li>
                <p class="p-2">you need to provide the documents such as PAN, Aadhar, Passport Size Photo, Aadar enabled mobile number & Email id in case of Individual and Organisation document as said above in case of Organisation DSC.</p>
                <li class="font-weight-bold text-primary">Online Submission<span class="font-weight-normal" style={{ fontSize: "13px", color: "black" }}>(Through e-Mudhra Portal - 5 Minutes Job)</span></li>
                <p class="p-2">We will fill the DSC application through e-Mudhra portal and submit the documents in case of physical mode.</p>
                <li class="font-weight-bold text-primary">Sharing of OTPs<span class="font-weight-normal" style={{ fontSize: "13px", color: "black" }}>(Through Online - Instant Job)</span></li>
                <p class="p-2">You will get OTPs whether we process it on Aadhar KYC or Phycsl mode. You need to share the same and then we enter those OTPs on the portal, then the systems instruct you to do the video recording. The system will send video recording links through Mobile SMS as well as through email.</p>
                <li class="font-weight-bold text-primary">Video Recording<span class="font-weight-normal" style={{ fontSize: "13px", color: "black" }}>(Through Online - 5 Minutes Job)</span></li>
                <p class="p-2">You can click the link received on Mobile SMS or Email and download the Android or IOS app on your mobile and start recording the video. You need to follow the instructions displayed on the screen do the video recording. Submit the video recording once it is completed.</p>
                <li class="font-weight-bold text-primary">Download the Certificate<span class="font-weight-normal" style={{ fontSize: "13px", color: "black" }}>(Through Online - 10 Minutes Job)</span></li>
                <p class="p-2">Once the video recording is done and if it is in order, the e-mudhra officer will approve the application and issues to approval SMS. If you can share the approval SMS, we will download the certificate(s) in Dongle. Thats it, then you can use it for your purpose.</p>
            </ol>
        </div>
    )
}
export default Digital;