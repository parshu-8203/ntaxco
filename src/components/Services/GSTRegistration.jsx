
import document from '../../assets/document.png'
const GSTRegistration = () => {
    return (
        <div>
            <h3>One Nation One Tax - GST</h3>
            <p>The implementation of the Goods and Services Tax (GST) in India in 2017 marked a significant overhaul in the country's tax structure, aligning with the concept of "One Nation One Tax." This reform merged central taxes (excluding petroleum and alcoholic products, and service tax) with state-level taxes (excluding VAT for petroleum and alcoholic products, entry tax, transfer tax, and luxury tax), streamlining them into a single tax.</p>
            <p>The primary aim of introducing GST was to eliminate double taxation or tax cascading, which occurs from the manufacturing level to the consumption level. GST is a value-added tax levied on most goods and services sold domestically, with consumers paying the tax at the point of sale, while businesses remit it to the government.</p>
            <ul class="star-unordered">
                <li>The goods and services tax (GST) is a tax on goods and services sold domestically for consumption.</li>

                <li>The tax is included in the final price and paid by consumers at point of sale and passed to the government by the seller.</li>

                <li>The GST is usually taxed as a single rate across a nation.</li>
            </ul>
            <h3 class="mt-5">Who are required to register under GST</h3>
            <p>Every supplier shall be liable to be registered under this Act in the State or Union territory, other than special category States, from where he makes a taxable supply of goods or services or both, if his aggregate turnover in a financial year exceeds twenty lakh rupees*</p>
            <p>Provided that where such person makes taxable supplies of goods or services or both from any of the special category States, he shall be liable to be registered if his aggregate turnover in a financial year exceeds ten lakh rupees*</p>
            <h3 class="mt-5">Mandatory GST Registration for the following persons</h3>
            <ol>
                <li>Businesses with turnover above the threshold limit of Rs. 40 Lakhs (Rs. 20 Lakhs for North-Eastern States, J&K, Himachal Pradesh and Uttarakhand)</li>
                <li>Persons making any inter-State taxable supply</li>
                <li>casual taxable persons making taxable supply</li>
                <li>persons who are required to pay tax under reverse charge</li>
                <li>E-Commerce Operator</li>
                <li>non-resident taxable persons making taxable supply</li>
                <li>persons who are required to deduct tax under section 51, whether or not separately registered under this Act</li>
                <li>persons who make taxable supply of goods or services or both on behalf of other taxable persons whether as an agent or otherwise;</li>
                <li>Input Service Distributor, whether or not separately registered under this Act</li>
                <li>persons who supply goods or services through e-Commerce operator</li>
                <li>every person supplying online information and database access or retrieval services from a place outside India to a person in India, other than a registered person</li>
                <li>such other person or class of persons as may be notified by the Government on the recommendations of the Council.</li>
            </ol>
            <p class="imp">
                * This limit is increased to Rs. 40 Lakhs w.e.f 1st April 2019 for all states except the State of Telangana. Special category states ie. Jammu and Kashmir, Ladakh and Assam also opted Rs.40 lakhs limit.</p>

            <p class="imp">** This limit is increased to Rs. 20 Lakhs w.e.f 1st April 2019 for Special Category States.</p>

            <p class="imp">*** A person making inter-state supply of services, supply of handicraft goods and a jobworker except a jewellery, goldsmith, silversmith whose aggregate turnover below the threshold (ie. Rs40/Rs.20 lakhs) limit are not required to register under GST</p>
            <p>Special Category States are Arunachal Pradesh, Assam, Jammu & Kashmir, Manipur, Meghalaya, Mizoram, Nagaland, Puducherry, Sikkim, Tripura, Himachal Pradesh and Uttarakhand. Any person may register under voluntarily even if his/her aggregate turnover is below the threshold limits.</p>
            <p class="imp"> <span style={{ fontWeight: "bold" }}>Aggregate Turnover</span>: “aggregate turnover” means the aggregate value of all taxable supplies (excluding the value of inward supplies on which tax is payable by a person on reverse charge basis), exempt supplies, exports of goods or services or both and inter-State supplies of persons having the same Permanent Account Number, to be computed on all India basis but excludes central tax, State tax, Union territory tax, integrated tax and cess.</p>
            <h3 class="mt-5">Who are not required to register under GST</h3>
            <ol> <li>Any person engaged exclusively in the business of supplying goods or services or both that are not liable to tax or wholly exempt from tax under this Act or under the Integrated Goods and Services Tax Act.</li>
                <li>An agriculturist, to the extent of supply of produce out of cultivation of land.</li>
            </ol>
            <h3 class="mt-5">Documents Required for GST Registration</h3>
            <h5 class="mt-4"><span class="me-3"><img src={document} /></span>For Proprietorship</h5>
            <ol class="ms-3">
                <li>PAN of Proprietor</li>
                <li>Aadhar of Proprietor</li>
                <li>Passport size photo of proprietor</li>
                <li>Aadhar enabled mobile number</li>
                <li>Valid email id</li>
                <li>Office Rental Agreement if it is rented</li>
                <li>Office NOC cum Affidavit if it is owned</li>
                <li>Office latest power bill</li>
            </ol>
            <h5 class="mt-4"><span class="me-3"><img src={document} /></span>For Partnership/LLP</h5>
            <ol class="ms-3">
                <li>PAN of Partners/Designated Partners</li>
                <li>Aadhar of Partners/Designated Partners</li>
                <li>Passport size photo of Partners/Designated Partners</li>
                <li>Aadhar enabled mobile number of Partners/Designated Partners</li>
                <li>Valid email id of Partners/Designated Partners</li>
                <li>Office Rental Agreement if it is rented</li>
                <li>Office NOC cum Affidavit if it is owned</li>
                <li>Office latest power bill</li>
                <li>Firm/LLP PAN</li>
                <li>Certificate of Registration</li>
                <li>Partnership Deed/LLP Agreement</li>
                <li>Authorisation Letter</li>
                <li>Digital Signature Certificate of Authorised Designated Partner</li>
            </ol>
            <h5 class="mt-4"><span class="me-3"><img src={document} /></span>For Company</h5>
            <ol class="ms-3">
                <li>PAN of Directors</li>
                <li>Aadhar of Directors</li>
                <li>Passport size photo of Directors</li>
                <li>Aadhar enabled mobile number of Directors</li>
                <li>Valid email id of Directors</li>
                <li>Office Rental Agreement if it is rented</li>
                <li>Office NOC cum Affidavit if it is owned</li>
                <li>Office latest power bill</li>
                <li>Company PAN</li>
                <li>Certificate of Incorporation</li>
                <li>MOA</li>
                <li>AOA</li>
                <li>Authorisation Letter or Board Resolution</li>
                <li>Digital Signature Certificate of Authorised Director</li>
            </ol>
        </div>
    )
}

export default GSTRegistration;