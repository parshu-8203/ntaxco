import document from "../../assets/document.png";
const Food = () => {
  return (
    <div>
      <p>
        <b>Who is required to take Food License (FSSAI) </b>: Every food
        business operator has to take a Food License before commencing the food
        business. Food License is issued by Food Safety Standards Authority of
        India (FSSAI). Food Safety Standards Authority of India (FSSAI) is the
        governing body regulated under Food Safety and Standards Act, 2006.
      </p>
      <p>
        <b>Who is exempted from Food License (FSSAI) </b>: A petty manufacturer
        who himself manufactures or sells any article of food or a petty
        retailer, hawker, itinerant vendor or a temporary stall holder or small
        scale or cottage or such other industries relating to food business or
        tiny food business operator. However, if their annual turnover is upto
        Rs.12 lakhs, they may apply for Registration under Food Safety and
        Standards Act, 2006.
      </p>
      <h3>What is Registration and License</h3>
      <p>
        <b>Registration</b> : A petty food business operator whose annual
        turnover is upto Rs. 12 lakhs will apply for Registration.
      </p>
      <p>
        <b>License </b>: A food business operator other than a petty food
        business operator will apply for License.
      </p>
      <h3>Types of Food Licenses</h3>
      <p>
        There are two types of Licenses: One is State License and other is
        Central License.
      </p>
      <h3>Punishment for carrying out a business without Food License</h3>
      <p>
        If any person or food business operator (except a petty manufacturer who
        himself manufactures or sells any article of food or a petty retailer,
        hawker, itinerant vendor or a temporary stall holder or small scale or
        cottage or such other industries relating to food business or tiny food
        business operator whose annual turnover is upto Rs.12 lakhs), himself or
        by any person on his behalf who is required to obtain licence,
        manufacturers, sells, stores or distributes or imports any article of
        food without licence, shall be punishable with imprisonment for a term
        which may extend to six months and also with a fine which may extend to
        five lakh rupees.
      </p>
      <h3>Who are required to take simple Registration</h3>
      <p>
        The following food business operators are eligible to take simple
        registration. It means a State or Central License is not required for
        them.
      </p>

      <div className="table-responsive">
        <table className="table table-gray table-bordered ">
          <thead>
            <th>Kind of Business</th>
            <th>Criteria</th>
            <th>License/Registration</th>
            <th>Fee Per Annum</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Petty Food Business Operators : </b>
                Manufactures or sells any kind of food by himself/herself, Petty
                retailer, hawker, itinerant vendor, temporary stall, Thela,
                Sweets Shop, Juice Stall etc. e.g Gol gappa stall,
                fruits/vegetables vendors, snacks stall, Tea Stall, Samosa,
                Bread pakoda, retail shops, Temporary Food Stalls like Chinese
                food stall, South Indian Food etc.
                <br></br>
                <b>Temporary or fixed stall</b> or food premise involved in
                preparation, storage, distribution and sale of food products
                that can be served as a snacks/ tea/coffee and similar variants.
                <br></br>
                <b>Hawker</b> - Selling packaged or freshly prepared food by
                travelling (usually on foot or movable carts) from one location
                to other.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Dairy Units including Milk Chilling Units</b>
                Registration for Petty Milkman, Milk Vendors. Dairy processing
                means handling, processing, manufacturing, packing, storing,
                distribution & transportation of milk and milk products.
              </td>
              <td>
                <p>Upto 500 Ltrs of Milk per day</p>
                <p>Upto 2.5 MT of Milk Solids per annum </p>
              </td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Repacking</b> means packing of food product into different
                sizes with labeling after doing minimal processing as required
                like sorting, grading, sieving etc. from wholesale packages. The
                food product is not manipulated & the composition or formulation
                is not affected or changed.
              </td>
              <td>
                <p>Turnover upto Rs.12 Lacs per annum</p> <p>or</p>{" "}
                <p>Production capacity upto 100 Kgs/Ltrs per day</p>
              </td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Vegetable Oil Processing Units</b>
                <br></br>
                Vegetable oil processing means processing of vegetables to
                produce vegetable oils by the process of solvent
                extraction/expeller and refining including oil expeller units.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Slaughtering House</b>
                <br></br>
                Slaughtering means a process of transporting, stunning,
                butchering, dressing, processing, storing & distribution of live
                animals/poultry birds. Meat shop, Chicken Shop, Mutton Shop Lamb
                Meat etc.
              </td>{" "}
              <td>Large Animals: 2 Small Animals: 10 Poultry Birds: 50</td>{" "}
              <td>Registration</td> <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Meat Processing</b>
                <br></br>
                Meat processing means further processing of slaughtered
                animals/poultry birds into meat & meat products, packaging,
                storing & transportation of meat & meat products. Fish
                processing means handling, processing of fish, manufacturing of
                fish products, packing, storing, distribution & transportation
                of fish and fish products.
              </td>{" "}
              <td>Annual Turnover upto Rs. 12 Lacs</td> <td>Registration</td>{" "}
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Storage - Cold/Refrigerated</b>
                <br></br>
                Cold/refrigerated storage is an activity where refrigerated/
                frozen food products in packed or unpacked condition is stored
                for further distribution in refrigeration/ freezing storage
                facilities.
              </td>{" "}
              <td>Annual Turnover upto Rs. 12 Lacs</td> <td>Registration</td>{" "}
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Storage – Atmospheric Controlled + Cold</b>
                <br></br>
                Controlled Atmosphere storage is an activity where food products
                in packed or unpacked condition is stored for further
                distribution in controlled atmosphere storage facilities. A
                controlled atmosphere, generally used for storage of dry
                commodities & agricultural produce in which the concentrations
                of oxygen, carbon dioxide and nitrogen, as well as the
                temperature and humidity of a storage room are regulated.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Storage Without Atmospheric Controlled + Cold</b>
                <br></br>
                Storage is an activity where food products in packed or unpacked
                condition is stored for further distribution in storage
                facilities, also called warehouses, godowns, etc{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Transporter (having a number of specialised vehicles like
                  insulated refrigerated van/wagon, milk tankers etc.)
                </b>
                <br></br>
                Transportation is an activity of transporting food products
                (both packed and bulk) from one location to another in
                vehicles/containers including specialized vehicles like
                insulated refrigerated van/ wagon, oil/milk tankers etc. Food
                Trucks are also covered in this category
              </td>
              <td>Single Vehicle and Turnover upto Rs.12 Lacs per annum</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Wholesaler</b>
                <br></br>
                Wholesale is an activity in the distribution channel where food
                product is procured in bulk and then sold to resellers/retailers
                rather than to consumers.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Distributor</b>
                <br></br>
                Distribution is an activity in the distribution channel where
                food product is distributed from the original place of
                manufacture to the person who makes the final delivery or sale
                of the food product to the ultimate consumer.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Supplier</b>
                <br></br>
                Supply is an activity in the distribution channel where food
                product is provided to the consumer as per the requirements
                raised by the consumer.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Retailer</b>
                <br></br>
                Retail is an activity where food products is procured from a
                manufacturer, distributor or wholesaler and sold to the ultimate
                end user.
                <br></br>E.g. Retail Shop/ Fish/ Meat/Poultry shop/ seller/Sweet
                Shop/Snacks/Confectionery or Bakery Shop{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Maker</b>
                <br></br>
                Marketing (self) means promoting food product of a brand in the
                market which is owned by the self.
                <br></br>Marketing (Third Party) means promoting food poduct of
                a brand in the market which is not owned by the self.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Hotel</b>
                <br></br>
                Hotel is a commercial establishment providing lodging, meals,
                and other guest services.
                <br></br>In general, to be called a hotel, an establishment must
                have a minimum of six letting bedrooms, at least three of which
                must have attached (ensuite) private bathroom facilities.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Restaurant and Bars</b>
                <br></br>
                Restaurant is a type of food service operation which prepares,
                serves food and drinks to customers in exchange for money. Meals
                are generally served and eaten on the premises, but many
                restaurants also offer take-out and food delivery services, and
                some offer only take-out and delivery.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Club/Canteen</b>
                <br></br>
                Canteen or Cafeteria is a dining area in an institution/
                establishment serving food (being prepared in the premises or
                procured from other location or source) to individuals
                associated with or visiting the institution.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Food Vending Agencies</b>
                <br></br>
                Sale of packaged/fresh food from a temporary or fixed
                stall/cart/ machine by an individual or by automation.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                <b>Dhaba</b>
                <br></br>
                Food service establishment generally located near
                roadside/highway involved in processing, storing, packaging and
                selling of food to customers for consumption
                <br></br> <b>Boarding houses serving food</b>
                <br></br>A building providing food and lodging for paying guest.
                <br></br>
                <b>Banquet halls with food catering arrangements</b>
                <br></br>A specified area such as hall which is used for the
                purpose of hosting parties/ ceremonies involved in preparation
                and serving of food to customers for consumption.
                <br></br>
                <b>Home Based Canteens/ Dabba Wallas</b>
                <br></br>An individual or establishment involved in distribution
                of packed meals (usually packed lunch) from food service
                establishments such as home based caterer or restaurants to
                customers.
                <br></br>
                <b>Permanent/ Temporary stall Holder</b> <br></br>A
                stand/booth/compartment/small covered area being used for
                preparation and /or sale of freshly prepared or packaged food
                for consumption. This structure maybe temporary or permanent
                (fixed).
                <br></br>
                <b>
                  Food stalls/ Arrangements in religious gatherings/ fairs etc
                </b>
                <br></br>A stand/booth/compartment/small covered area being used
                for preparation and /or sale or distribution of freshly prepared
                or packaged food being offered as Prasad in a religious
                institution.
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Departmental Canteens at the premises of Central Govt.
                  Institutions
                </b>
                <br></br>
                Food Service Establishment involved in preparation and serving
                of food for consumption of a group of individuals working or
                visiting central government agencies{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Mid Day Meal Canteen</b>
                <br></br>
                Canteens serving food under mid day meal scheme in Schools.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Caterers/Restaurants/Canteens/Hawkers/Petty Retailers at the
                  premises of Railway Stations or under the control of Indian
                  Railways
                </b>
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Registration</td>
              <td>Rs.100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-4">Who are required to take State License</h3>
      <p>
        The following food business operators are eligible to take State
        License.
      </p>
      <div className="table-responsive">
        <table className="table table-primary table-bordered ">
          <thead>
            <th>Kind of Business</th>
            <th>Criteria</th>
            <th>License/Registration</th>
            <th>Fee Per Annum</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Dairy Units including Milk Chilling Units</b>
                <br></br>Registration for Petty Milkman, Milk Vendors. Dairy
                processing means handling, processing, manufacturing, packing,
                storing, distribution & transportation of milk and milk
                products.
              </td>
              <td>
                {" "}
                10001 – 50,000 Ltrs of Milk per day
                <br></br>501 MT – 2500 MT of Milk Solids per annum{" "}
              </td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>

            <tr>
              <td>
                <b>Dairy Units including Milk Chilling Units</b>
                <br></br>Registration for Petty Milkman, Milk Vendors. Dairy
                processing means handling, processing, manufacturing, packing,
                storing, distribution & transportation of milk and milk
                products.
              </td>
              <td>
                {" "}
                501 – 10,000 Ltrs of Milk per day<br></br>2.5 MT – 500 MT of
                Milk Solids per annum
              </td>
              <td>State License</td>
              <td>Rs.3000</td>
            </tr>

            <tr>
              <td>
                <b>Vegetable Oil Processing Units</b>
                <br></br>Vegetable oil processing means processing of vegetables
                to produce vegetable oils by the process of solvent
                extraction/expeller and refining including oil expeller units.
              </td>
              <td>1-2 MT per day</td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>
            <tr>
              <td>
                <b>Vegetable Oil Processing Units</b>
                <br></br>Vegetable oil processing means processing of vegetables
                to produce vegetable oils by the process of solvent
                extraction/expeller and refining including oil expeller units.
              </td>
              <td>Below 1 MT per day</td>
              <td>State License</td>
              <td>Rs.3000</td>
            </tr>
            <tr>
              <td>
                <b>Slaughtering House</b>
                <br></br>
                Slaughtering means a process of transporting, stunning,
                butchering, dressing, processing, storing & distribution of live
                animals/poultry birds.
                <br></br>Meat shop, Chicken Shop, Mutton Shop Lamb Meat etc.
              </td>
              <td>
                Large Animals: 3 to 50<br></br>
                Small Animals: 11 to 150<br></br>
                Poultry Birds: 51 to 1000
              </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Meat Processing</b>
                <br></br>
                Meat processing means further processing of slaughtered
                animals/poultry birds into meat & meat products, packaging,
                storing & transportation of meat & meat products.
                <br></br>Fish processing means handling, processing of fish,
                manufacturing of fish products, packing, storing, distribution &
                transportation of fish and fish products.
              </td>
              <td>
                Upto 500 Kg Meat per day
                <br></br>or<br></br>Upto 150 MT Meat per annum{" "}
              </td>
              <td>State License</td>
              <td>Rs.3000</td>
            </tr>
            <tr>
              <td>
                <b>
                  All Food Manufacturing/ Processing units other than Dairy
                  Units, Vegetable Oil, Meat Processing and Slaughtering Houses
                </b>
                <br></br>
                <b>Manufacturing/Processing Unit </b>means a person/entity which
                owns or operates an establishment that manufactures or processes
                a food product. This term includes, but is not limited to
                contract manufacturers, contract packers and other entities that
                manufactures or processes a food product.
                <br></br>
                <b>Manufacturing or processing </b>means each step in conversion
                of raw material derived from livestock and agricultural produce
                into products for intermediate or final consumption. The process
                includes procurement, receipt, preparation,
                Manufacturing/processing, packaging, storage, distribution &
                transportation of food products.
                <br></br>
                <b>Repacking</b> means packing of food product into different
                sizes with labeling after doing minimal processing as required
                like sorting, grading, sieving etc. from wholesale packages. The
                food product is not manipulated & the composition or formulation
                is not affected or changed.
              </td>
              <td>
                Production Capacity: 101 Kgs/Ltrs – 1 MT Per Day<br></br>All
                Grains, Cereals, Pulses Milling units without any limit on
                Production Capacity{" "}
              </td>
              <td>State License</td>
              <td>Rs.3000</td>
            </tr>
            <tr>
              <td>
                <b>
                  All Food Manufacturing/ Processing units other than Dairy
                  Units, Vegetable Oil, Meat Processing and Slaughtering Houses
                </b>
                <br></br>
                <b>Manufacturing/Processing Unit </b>means a person/entity which
                owns or operates an establishment that manufactures or processes
                a food product. This term includes, but is not limited to
                contract manufacturers, contract packers and other entities that
                manufactures or processes a food product.
                <br></br>
                <b>Manufacturing or processing </b>means each step in conversion
                of raw material derived from livestock and agricultural produce
                into products for intermediate or final consumption. The process
                includes procurement, receipt, preparation,
                Manufacturing/processing, packaging, storage, distribution &
                transportation of food products.
                <br></br>
                <b>Repacking</b> means packing of food product into different
                sizes with labeling after doing minimal processing as required
                like sorting, grading, sieving etc. from wholesale packages. The
                food product is not manipulated & the composition or formulation
                is not affected or changed.
              </td>
              <td> Production Capacity: 1MT – 2 MT Per Day </td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>
            <tr>
              <td>
                <b>Storage - Cold/Refrigerated</b>
                <br></br>
                <b>Cold/refrigerated</b> storage is an activity where
                refrigerated/ frozen food products in packed or unpacked
                condition is stored for further distribution in refrigeration/
                freezing storage facilities.
              </td>
              <td>Storage Capacity Upto 10,000 MT </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Storage – Atmospheric Controlled + Cold</b>
                <br></br>
                Controlled Atmosphere storage is an activity where food products
                in packed or unpacked condition is stored for further
                distribution in controlled atmosphere storage facilities. A
                controlled atmosphere, generally used for storage of dry
                commodities & agricultural produce in which the concentrations
                of oxygen, carbon dioxide and nitrogen, as well as the
                temperature and humidity of a storage room are regulated.
              </td>
              <td>Storage Capacity Upto 1,000 MT </td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>
            <tr>
              <td>
                <b>Storage Without Atmospheric Controlled + Cold</b>
                <br></br>
                Storage is an activity where food products in packed or unpacked
                condition is stored for further distribution in storage
                facilities, also called warehouses, godowns, etc
              </td>
              <td>Storage Capacity Upto 50,000 MT </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>
                  Transporter (having a number of specialised vehicles like
                  insulated refrigerated van/wagon, milk tankers etc.)
                </b>
                <br></br>
                Transportation is an activity of transporting food products
                (both packed and bulk) from one location to another in
                vehicles/containers including specialized vehicles like
                insulated refrigerated van/ wagon, oil/milk tankers etc.
                <br></br>
                Food Trucks are also covered in this category
              </td>
              <td>
                Upto 100 Vehicles and Turnover upto Rs. 30 Crores per annum
              </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Wholesaler</b>
                <br></br>
                Wholesale is an activity in the distribution channel where food
                product is procured in bulk and then sold to resellers/retailers
                rather than to consumers.
              </td>
              <td> </td>
              <td>Turnover upto Rs. 30 Crores per annum</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Distributor</b>
              </td>
              <td>
                Distribution is an activity in the distribution channel where
                food product is distributed from the original place of
                manufacture to the person who makes the final delivery or sale
                of the food product to the ultimate consumer.
              </td>
              <td>Turnover upto Rs. 20 Crores per annum</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Supplier</b>
                <br></br>
                Supply is an activity in the distribution channel where food
                product is provided to the consumer as per the requirements
                raised by the consumer.
              </td>
              <td> Turnover upto Rs. 20 Crores per annum </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Retailer</b>
                <br></br>
                Retail is an activity where food products is procured from a
                manufacturer, distributor or wholesaler and sold to the ultimate
                end user.
                <br></br>E.g. Retail Shop/ Fish/ Meat/Poultry shop/ seller/Sweet
                Shop/Snacks/Confectionery or Bakery Shop
              </td>
              <td> Turnover upto Rs. 20 Crores per annum </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Maker</b>
                <br></br>
                Marketing (self) means promoting food product of a brand in the
                market which is owned by the self.
                <br></br>Marketing (Third Party) means promoting food poduct of
                a brand in the market which is not owned by the self.
              </td>
              <td> Turnover upto Rs. 20 Crores per annum </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Hotel</b>
                <br></br>Hotel is a commercial establishment providing lodging,
                meals, and other guest services.<br></br>In general, to be
                called a hotel, an establishment must have a minimum of six
                letting bedrooms, at least three of which must have attached
                (ensuite) private bathroom facilities.
              </td>
              <td>Three Star and Four Star</td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>
            <tr>
              <td>
                <b>Hotel</b>
                <br></br>Hotel is a commercial establishment providing lodging,
                meals, and other guest services.<br></br>In general, to be
                called a hotel, an establishment must have a minimum of six
                letting bedrooms, at least three of which must have attached
                (ensuite) private bathroom facilities.
              </td>
              <td>
                One Star, Two Star or Hotel without Star Rating by Ministry of
                Tourism (HRACC){" "}
              </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Restaurant and Bars</b>
                <br></br>
                Restaurant is a type of food service operation which prepares,
                serves food and drinks to customers in exchange for money. Meals
                are generally served and eaten on the premises, but many
                restaurants also offer take-out and food delivery services, and
                some offer only take-out and delivery.
              </td>
              <td>Turnover upto Rs. 20 Crores per annum</td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Club/Canteen</b>
                <br></br>
                Canteen or Cafeteria is a dining area in an institution/
                establishment serving food (being prepared in the premises or
                procured from other location or source) to individuals
                associated with or visiting the institution.
              </td>
              <td>Turnover More than Rs 12 Lacs per annum </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Caterer</b>
                <br></br>
                Food Service Establishment involved in preparation, storage,
                serving and /or transport of food for consumption of a group at
                a venue of ceremony/celebration /ritual/institution.
              </td>
              <td>Turnover upto Rs. 20 Crores per annum</td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Food Vending Agencies</b>
                <br></br>
                Sale of packaged/fresh food from a temporary or fixed
                stall/cart/ machine by an individual or by automation.
              </td>
              <td>Upto 100 Vending Machines in only one State/UT</td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Dhaba</b>
                <br></br>
                Food service establishment generally located near
                roadside/highway involved in processing, storing, packaging and
                selling of food to customers for consumption<br></br>
                <b>Boarding houses serving food</b>
                <br></br>A building providing food and lodging for paying guest.
                <br></br>
                <b>Banquet halls with food catering arrangements</b>
                <br></br>A specified area such as hall which is used for the
                purpose of hosting parties/ ceremonies involved in preparation
                and serving of food to customers for consumption.<br></br>
                <b>Home Based Canteens/ Dabba Wallas</b>
                <br></br>
                An individual or establishment involved in distribution of
                packed meals (usually packed lunch) from food service
                establishments such as home based caterer or restaurants to
                customers.<br></br>
                <b>Permanent/ Temporary stall Holder</b>
                <br></br>A stand/booth/compartment/small covered area being used
                for preparation and /or sale of freshly prepared or packaged
                food for consumption. This structure maybe temporary or
                permanent (fixed).<br></br>
                <b>
                  Food stalls/ Arrangements in religious gatherings/ fairs etc
                </b>
                <br></br>A stand/booth/compartment/small covered area being used
                for preparation and /or sale or distribution of freshly prepared
                or packaged food being offered as Prasad in a religious
                institution.<br></br>
              </td>
              <td>Turnover more than Rs.12 Lacs per annum </td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Mid Day Meal Caterer</b>
                <br></br>The Midday Meal Scheme is a school meal programme of
                the Government of India designed to better the nutritional
                standing of school-age children nationwide. The programme
                supplies free lunches on working days for children in primary
                and upper primary classes in government, government aided, local
                body, Education Guarantee Scheme, and alternate innovative
                education centres, Madarsa and Maqtabs supported under Sarva
                Shiksha Abhiyan, and National Child Labour Project schools run
                by the ministry of labour. Caterer preparing and transporting
                food to institutions under Midday meal scheme.
              </td>
              <td>Turnover upto Rs. 20 Crores per annum</td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>Mid Day Meal Canteen</b>
                <br></br>Canteens serving food under mid day meal scheme in
                Schools.
              </td>
              <td>Turnover More than Rs 12 Lacs per annum</td>
              <td>State License</td>
              <td>Rs.2000</td>
            </tr>
            <tr>
              <td>
                <b>
                  Caterers/Restaurants/Canteens/Hawkers/Petty Retailers at the
                  premises of Railway Stations or under the control of Indian
                  Railways.
                </b>
              </td>
              <td>Annual turnover upto Rs.12 Lacs</td>
              <td>State License</td>
              <td>Rs.5000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-4">Who are required to take Central License</h3>
      <p>
        The following food business operators are eligible to take Central
        License.
      </p>
      <div className="table-responsive">
        <table className="table table-primary table-bordered ">
          <thead>
            <th>Kind of Business</th>
            <th>Criteria</th>
            <th>License/Registration</th>
            <th>Fee Per Annum</th>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <b>Dairy Units including Milk Chilling Units</b>
                <br></br>Registration for Petty Milkman, Milk Vendors. Dairy
                processing means handling, processing, manufacturing, packing,
                storing, distribution & transportation of milk and milk
                products.
              </td>
              <td>
                More than 50,000 Liters of Milk per day<br></br>
                More than 2500 MT of Milk Solid Per annum{" "}
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Vegetable Oil Processing Units</b>
                <br></br>Vegetable oil processing means processing of vegetables
                to produce vegetable oils by the process of solvent
                extraction/expeller and refining including oil expeller units.{" "}
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b></b>
              </td>
              <td>More than 2 MT per day</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Slaughtering House</b>
                <br></br>Slaughtering means a process of transporting, stunning,
                butchering, dressing, processing, storing & distribution of live
                animals/poultry birds.
                <br></br>Meat shop, Chicken Shop, Mutton Shop Lamb Meat etc.{" "}
              </td>
              <td>
                Large Animals: 50<br></br>
                Small Animals: More than 150<br></br>
                Poultry Birds: 1000
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Meat Processing</b>
                <br></br>Meat processing means further processing of slaughtered
                animals/poultry birds into meat & meat products, packaging,
                storing & transportation of meat & meat products.
                <br></br>Fish processing means handling, processing of fish,
                manufacturing of fish products, packing, storing, distribution &
                transportation of fish and fish products.{" "}
              </td>
              <td>
                Morethan 500 Kg Meat per day
                <br></br>or<br></br>
                More than 2 MT per day<br></br>No Grains, Cereals or Pulses
                Milling Units
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  All Food Manufacturing/ Processing units other than Dairy
                  Units, Vegetable Oil, Meat Processing and Slaughtering Houses
                  Manufacturing/Processing Unit
                </b>{" "}
                means a person/entity which owns or operates an establishment
                that manufactures or processes a food product.
                <br></br>
                This term includes, but is not limited to contract
                manufacturers, contract packers and other entities that
                manufactures or processes a food product.<br></br>
                <b>Manufacturing or processing </b>means each step in conversion
                of raw material derived from livestock and agricultural produce
                into products for intermediate or final consumption. The process
                includes procurement, receipt, preparation,
                Manufacturing/processing, packaging, storage, distribution &
                transportation of food products.
                <br></br>
                <b>Repacking</b> means packing of food product into different
                sizes with labeling after doing minimal processing as required
                like sorting, grading, sieving etc. from wholesale packages. The
                food product is not manipulated & the composition or formulation
                is not affected or changed.
              </td>
              <td>
                Production Capacity: More than 101 Kgs/Ltrs – 1 MT Per Day
                <br></br>All Grains, Cereals, Pulses Milling units without any
                limit on Production Capacity
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Proprietary Food</b>
              </td>
              <td>No restriction on production capacity </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Novel Food</b> <br></br>{" "}
                <b>With prior Product Approval/ NOC from FSSAI </b>
              </td>
              <td>No restriction on production capacity </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Storage - Cold/Refrigerated</b>
                <br></br> ,<b>Cold/refrigerated </b>storage is an activity where
                refrigerated/ frozen food products in packed or unpacked
                condition is stored for further distribution in refrigeration/
                freezing storage facilities.{" "}
              </td>
              <td>Storage Capacity more than 10,000 MT </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Storage – Atmospheric Controlled + Cold</b>
                <br></br>
                Controlled Atmosphere storage is an activity where food products
                in packed or unpacked condition is stored for further
                distribution in controlled atmosphere storage facilities. A
                controlled atmosphere, generally used for storage of dry
                commodities & agricultural produce in which the concentrations
                of oxygen, carbon dioxide and nitrogen, as well as the
                temperature and humidity of a storage room are regulated.{" "}
              </td>
              <td>Storage Capacity more than 10,000 MT</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Storage Without Atmospheric Controlled + Cold</b>Storage is
                an activity where food products in packed or unpacked condition
                is stored for further distribution in storage facilities, also
                called warehouses, godowns, etc{" "}
              </td>
              <td>Storage Capacity more than 50,000 MT</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b></b>
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Transporter (having a number of specialised vehicles like
                  insulated refrigerated van/wagon, milk tankers etc.)
                </b>{" "}
                <br></br>Transportation is an activity of transporting food
                products (both packed and bulk) from one location to another in
                vehicles/containers including specialized vehicles like
                insulated refrigerated van/ wagon, oil/milk tankers etc.
                <br></br>Food Trucks are also covered in this category{" "}
              </td>
              <td>
                More than 100 Vehicles and Turnover more than Rs. 30 Crores per
                annum{" "}
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Wholesaler</b>
                <br></br>Wholesale is an activity in the distribution channel
                where food product is procured in bulk and then sold to
                resellers/retailers rather than to consumers. q
              </td>
              <td>Turnover more than Rs. 30 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b></b>
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Distributor</b>
                <br></br>Distribution is an activity in the distribution channel
                where food product is distributed from the original place of
                manufacture to the person who makes the final delivery or sale
                of the food product to the ultimate consumer.{" "}
              </td>
              <td>Turnover more than Rs. 20 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Supplier</b>
                <br></br>Supply is an activity in the distribution channel where
                food product is provided to the consumer as per the requirements
                raised by the consumer.
              </td>
              <td>Turnover more than Rs. 20 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Retailer</b>
                <br></br>Retail is an activity where food products is procured
                from a manufacturer, distributor or wholesaler and sold to the
                ultimate end user.
                <br></br>E.g. Retail Shop/ Fish/ Meat/Poultry shop/ seller/Sweet
                Shop/Snacks/Confectionery or Bakery Shop{" "}
              </td>
              <td>Turnover more than Rs. 20 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Maker</b>
                <br></br>Marketing (self) means promoting food product of a
                brand in the market which is owned by the self.
                <br></br>Marketing (Third Party) means promoting food poduct of
                a brand in the market which is not owned by the self.{" "}
              </td>
              <td>Turnover more than Rs. 20 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Hotel</b>
                <br></br>Hotel is a commercial establishment providing lodging,
                meals, and other guest services.
                <br></br>In general, to be called a hotel, an establishment must
                have a minimum of six letting bedrooms, at least three of which
                must have attached (ensuite) private bathroom facilities.
              </td>
              <td>Three Star and Four Star</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Hotel</b>
                <br></br>Hotel is a commercial establishment providing lodging,
                meals, and other guest services.
                <br></br>In general, to be called a hotel, an establishment must
                have a minimum of six letting bedrooms, at least three of which
                must have attached (ensuite) private bathroom facilities.
              </td>
              <td>Five Star and above </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b></b>
              </td>
              <td>Annual Turnover upto Rs. 12 Lacs</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Restaurant and Bars</b>
                <br></br>Restaurant is a type of food service operation which
                prepares, serves food and drinks to customers in exchange for
                money. Meals are generally served and eaten on the premises, but
                many restaurants also offer take-out and food delivery services,
                and some offer only take-out and delivery.{" "}
              </td>
              <td>Turnover upto Rs. 20 Crores per annum</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Caterer</b>
                <br></br>Food Service Establishment involved in preparation,
                storage, serving and /or transport of food for consumption of a
                group at a venue of ceremony/celebration /ritual/institution.{" "}
              </td>
              <td>Turnover more than Rs. 20 Crores per annum </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>Food Vending Agencies</b>
                <br></br>
                Sale of packaged/fresh food from a temporary or fixed
                stall/cart/ machine by an individual or by automation.{" "}
              </td>
              <td>
                More than 100 Vending Machines and/or located in two or more
                States/UTs{" "}
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Importers</b>
                <br></br>
                Importers importing food items including food ingredients and
                additives for commercial use. Import is an activity where
                articles of trade from a foreign source is brought into a
                domestic market in the course of trade
              </td>
              <td>
                Importing any type of food product with no limit on the capacity{" "}
              </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Food Business Activities at premises of Central Govt Agencies
                  such as Storage, Wholesale, Distribution, Retail etc Documents
                  for License as per the business activity – Storage, Wholesale,
                  Distribution, Retail{" "}
                </b>
              </td>
              <td>No limit on Capacity or Turnover </td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Departmental Canteens at the premises of Central Govt.
                  Institutions
                </b>
                <br></br>Food Service Establishment involved in preparation and
                serving of food for consumption of a group of individuals
                working or visiting central government agencies
              </td>
              <td></td>
              <td>Turnover more than Rs.12 Lacs per annum </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Food Business Activities at premises of Airport/Seaport such
                  as Storage, Wholesale, Distribution, Retail etc
                </b>
                <br></br>Food Service Establishment involved in preparation and
                serving of food at airports/seaports.<br></br>
                <b>
                  Documents for License as per the business activity – Storage,
                  Wholesale, Distribution, Retail
                </b>
              </td>
              <td>No limit on Capacity or Turnover</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>Mid Day Meal Caterer</b>
                <br></br>
                The Midday Meal Scheme is a school meal programme of the
                Government of India designed to better the nutritional standing
                of school-age children nationwide. The programme supplies free
                lunches on working days for children in primary and upper
                primary classes in government, government aided, local body,
                Education Guarantee Scheme, and alternate innovative education
                centres, Madarsa and Maqtabs supported under Sarva Shiksha
                Abhiyan, and National Child Labour Project schools run by the
                ministry of labour. Caterer preparing and transporting food to
                institutions under Midday meal scheme.
              </td>
              <td>Turnover more than Rs. 20 Crores per annum</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Exporter</b>
              </td>
              <td>No limit on Capacity or Turnover</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>
                  Caterers/Restaurants/Canteens/Hawkers/Petty Retailers at the
                  premises of Railway Stations or under the control of Indian
                  Railways
                </b>
              </td>
              <td>Annual turnover more than Rs.12 Lacs</td>
              <td>Central Licenses</td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>E-Commerce</b>
                <br></br>
                E-commerce also known as electronic commerce or internet
                commerce, refers to the buying and selling of goods or services
                using the internet, and the transfer of money and data to
                execute these transactions. Ecommerce is often used to refer to
                the sale of physical products online, but it can also describe
                any kind of commercial transaction that is facilitated through
                the internet.
              </td>
              <td>No limit on Capacity or Turnover</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <b>Head Office/Registered Office</b>
                Food Business Operators having food business activities in two
                or more States/UTs have to declare one Head Office/Registered
                Office.{" "}
              </td>
              <td>No limit on Capacity or Turnover</td>
              <td>Central License </td>
              <td>Rs.7500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-3">
        Documents Required for FSSAI Registration/License
      </h3>
      <h5 className="mt-4 text-primary">
        <span className="me-3">
          <img src={document} />
        </span>
        Registration
      </h5>
      <ol className="ms-3">
        <li>Proprietor/Partners/Directors Photos</li>
        <li>ID Proofs</li>
        <li>Aadhaar Card or Voter ID or Passport or Driver's License</li>
        <li>Registered Office Address Proof: Latest Power Bill</li>
        <li>No-objection letter from the Landlord.</li>
        <li>Rental Agreement from the landlord if the premises are rented.</li>
        <li>Company email id.</li>
        <li>Mobile Numbers</li>
        <li>Self Declaratoin in Sepcimen Format</li>
      </ol>
      <h5 className="mt-4 text-primary">
        <span className="me-3">
          <img src={document} />
        </span>
        State/Central License-Non Manufacturing/Pricessing Units
      </h5>
      <ol className="ms-3">
        <li>
          List of Directors/Partners/Proprietor/Executive Members of
          Society/Trust with full address and contact details with nomination of
          authorized signatory on letter head.
        </li>
        <li>
          Photo Id and address proof (ie. Aadhar) issued by Government Authority
          of Proprietor/Partners/Directors/Authorised Signatory.
        </li>
        <li>
          Proof of possession of premises (ie. Sale Deed/Rent
          Agreement/Electricity Bill).
        </li>
        <li>Certificate of Registration.</li>
        <li>
          Partnership Deed/MOA, AOA/ Bylaws/Self declaration of a
          Proprietorship.
        </li>
        <li>
          Form IX: Nomination of Person on letter head. Not applicable in case
          of Proprietorship.
        </li>
        <li>
          In case of extraction of ground water, NOC from CGWA as per FSSAI
          order dated 2nd January 2018 and 11th January 2021.
        </li>
        <li>
          Any document which is required by the licensing authority to ensure
          safety of food.
        </li>
        <li>
          Analysis Report (Chemical & Bacteriological) of water to be used as
          ingredient in food from a recognized /public health laboratory to
          confirm the potability indicating the name of authorized
          representative of Lab who collected the sample and date of collecting
          sample. Not applicable if water is not being used as ingredient.
          Applicable for Food services such as Hotels/Restaurants, Food Vending
          Establishments, Club/Canteen or any other prepared food establishment.
        </li>
        <li>
          Import Export Code (IEC)and Recall Plan for Importers of Food
          Products.
        </li>
        <li>
          Import Export Code and Declaration that products meant for export only
          shall not be exposed for sale and consumption in domestic market.
          Further, the products meant for export only meet the standards of
          importing country. This is applicable for Merchant Exporters.
        </li>
        <li>
          Recall Plan for Head Office/Registered Office and E-Commerce
          Businesses.
        </li>
        <li>List of Vehicle Registration Numbers for Transporters.</li>
      </ol>
      <h5 className="mt-4 text-primary">
        <span className="me-3">
          <img src={document} />
        </span>
        State/Central License-Manufacturing/Pricessing Units
      </h5>
      <ol className="ms-3">
        <li>
          List of Directors/Partners/Proprietor/Executive Members of
          Society/Trust with full address and contact details with nomination of
          authorized signatory on letter head.
        </li>
        <li>
          Photo Id and address proof (ie. Aadhar) issued by Government Authority
          of Proprietor/Partners/Directors/Authorised Signatory.
        </li>
        <li>
          Proof of possession of premises (ie. Sale Deed/Rent
          Agreement/Electricity Bill).
        </li>
        <li>Certificate of Registration.</li>
        <li>
          Partnership Deed/MOA, AOA/ Bylaws/Self declaration of a
          Proprietorship.
        </li>
        <li>
          Form IX: Nomination of Person on letter head. Not applicable in case
          of Proprietorship.
        </li>
        <li>
          In case of extraction of ground water, NOC from CGWA as per FSSAI
          order dated 2nd January 2018 and 11th January 2021.
        </li>
        <li>
          Blueprint/Layout plan of the processing unit showing the dimensions in
          meters/square meters and operation wise are allocation.
        </li>
        <li>Production unit photographs.</li>
        <li>
          Name and list of Equipments and Machinery along with the number,
          installed capacity and horse power used.
        </li>
        <li>
          Analysis Report (Chemical & Bacteriological) of water to be used as
          ingredient in food from a recognized /public health laboratory to
          confirm the potability indicating the name of authorized
          representative of Lab who collected the sample and date of collecting
          sample. Not applicable if water is not being used as ingredient.
        </li>
        <li>Recall Plan.</li>
        <li>Source or procurement plan for mil in case of Dairy Processing.</li>
        <li>
          Source of Raw Material and NOC from Municipal Corporation/Local
          Authority in case of Meat Processing & Slaughter House.
        </li>
        <li>NOC from manufacturers in case of Relabellers and Repackers.</li>
        <li>
          Product specification (ingredients as per applicable schedule) of each
          product mentioning the purity criteria adopted for ingredients of
          Nutraceuticals and health supplement products as per the prescribed
          format. This is applicable for Nutraceuticals.
        </li>
        <li>
          Composition of the each products as per the prescribed format in case
          of Proprietor Foods.
        </li>
        <li>
          Product approval from FSSAI head quarters for each product in case of
          Novel Foods.
        </li>
        <li>
          Pesticide residue report of water to be used as ingredient in case of
          units manufacturing Packaged Drinking Water, packaged mineral water
          and/or carbonated water from a recognized/public health laboratory
          indicating the name of authorized representative of Lab who collected
          the sample and date of collecting sample, including source of raw
          water and treatment plan in case of Packaged Drinking Water.
        </li>
        <li>
          Import Export Code (IEC), Declaration that products meant for export
          only shall not be exposed for sale and consumption in domestic market.
          Further, the products meant for export only meet the standards of
          importing country and Ministry of Commerce Certificate for 100% EOU if
          availing the scheme. This is applicable for Exporter.
        </li>
        <li>
          Any document which is required by the licensing authority to ensure
          safety of food.
        </li>
      </ol>
      <h3 className="mt-3">Food Business License/Registration Process</h3>
      <p>
        You can get your Food Business Registration/License in the following
        three steps.
      </p>
      <ol>
        <li className="font-weight-bold text-primary">
          Preparation of Documents
          <span
            className="font-weight-normal"
            style={{ fontSize: "13px", color: "black" }}
          >
            {" "}
            (Through FSSAI web portal - One Hour Job)
          </span>
        </li>
        <p className="p-2">
          We will prepare all the documents required for registration/license.
        </p>
        <li className="font-weight-bold text-primary">
          Online Submission with FSSAI Web Portal
          <span
            className="font-weight-normal"
            style={{ fontSize: "13px", color: "black" }}
          >
            {" "}
            (Through FSSAI web portal - One Hour Job)
          </span>
        </li>
        <p className="p-2">
          We will upload the documents and pay the requisite fee at FSSAI web
          portal.
        </p>
        <li className="font-weight-bold text-primary">
          Certificate of Registration
          <span
            className="font-weight-normal"
            style={{ fontSize: "13px", color: "black" }}
          >
            {" "}
            (Through eMail - 10 to 15 Days)
          </span>
        </li>
        <p className="p-2">
          After scrutiny, the FSSAI Officer will approve the form and issues you
          the Certificate of Registration through email.
        </p>
      </ol>
    </div>
  );
};
export default Food;
