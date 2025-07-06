export function ApplicationDetails({ formData, setformData }) {
  const handleInputChange = (field, value) => {
    setformData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div class="card-header bg-primary text-white section-title">Application Info</div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">State *</label>
          <select 
            class="form-select" 
            required
            value={formData.stateSelection}
            onChange={e => handleInputChange('stateSelection', e.target.value)}
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">RTO Office *</label>
          <select 
            class="form-select" 
            required
            value={formData.rtoOffice}
            onChange={e => handleInputChange('rtoOffice', e.target.value)}
          >
            <option value="">Select RTO Office</option>
            <option value="KL01 - Thiruvananthapuram">KL01 - Thiruvananthapuram</option>
            <option value="KL02 - Kollam">KL02 - Kollam</option>
            <option value="KL03 - Pathanamthitta">KL03 - Pathanamthitta</option>
            <option value="KL04 - Alappuzha">KL04 - Alappuzha</option>
            <option value="KL05 - Kottayam">KL05 - Kottayam</option>
            <option value="KL06 - Idukki">KL06 - Idukki</option>
            <option value="KL07 - Ernakulam">KL07 - Ernakulam</option>
            <option value="KL08 - Thrissur">KL08 - Thrissur</option>
            <option value="KL09 - Palakkad">KL09 - Palakkad</option>
            <option value="KL10 - Malappuram">KL10 - Malappuram</option>
            <option value="KL11 - Kozhikode">KL11 - Kozhikode</option>
            <option value="KL12 - Wayanad">KL12 - Wayanad</option>
            <option value="KL13 - Kannur">KL13 - Kannur</option>
            <option value="KL14 - Kasaragod">KL14 - Kasaragod</option>
            <option value="KL15 - Attingal">KL15 - Attingal</option>
            <option value="KL16 - Adoor">KL16 - Adoor</option>
            <option value="KL17 - Muvattupuzha">KL17 - Muvattupuzha</option>
            <option value="KL18 - Vadakara">KL18 - Vadakara</option>
            <option value="KL19 - Parassala">KL19 - Parassala</option>
            <option value="KL20 - Neyyattinkara">KL20 - Neyyattinkara</option>
            <option value="KL21 - Nedumangad">KL21 - Nedumangad</option>
            <option value="KL22 - Kazhakkoottam">KL22 - Kazhakkoottam</option>
            <option value="KL23 - Karunagappally">KL23 - Karunagappally</option>
            <option value="KL24 - Kottarakkara">KL24 - Kottarakkara</option>
            <option value="KL25 - Adoor">KL25 - Adoor</option>
            <option value="KL26 - Punalur">KL26 - Punalur</option>
            <option value="KL27 - Thiruvalla">KL27 - Thiruvalla</option>
            <option value="KL28 - Mallappally">KL28 - Mallappally</option>
            <option value="KL29 - Kayamkulam">KL29 - Kayamkulam</option>
            <option value="KL30 - Chengannur">KL30 - Chengannur</option>
          </select>
        </div>
      </div>
    </>
  );
}
