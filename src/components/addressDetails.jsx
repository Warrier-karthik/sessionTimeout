export function AddressDetails({ formData, setformData }) {
  const handleInputChange = (field, value) => {
    setformData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <div class="card-header bg-primary text-white section-title">
        Address Details
      </div>
      <div class="card-body">
        <div class="form-grid">
          <div class="form-group">
            <label for="state" class="form-label">
              State *
            </label>
            <select 
              id="state" 
              class="form-select" 
              required
              value={formData.presentState}
              onChange={e => handleInputChange('presentState', e.target.value)}
            >
              <option value="">Select State</option>
              <option value="Kerala">Kerala</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>
          </div>
          <div class="form-group">
            <label for="district" class="form-label">
              District *
            </label>
            <select 
              id="district" 
              class="form-select" 
              required
              value={formData.presentDistrict}
              onChange={e => handleInputChange('presentDistrict', e.target.value)}
            >
              <option value="">Select District</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Kollam">Kollam</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Idukki">Idukki</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Kannur">Kannur</option>
              <option value="Kasaragod">Kasaragod</option>
            </select>
          </div>
          <div class="form-group">
            <label for="taluka" class="form-label">
              Taluka *
            </label>
            <select 
              id="taluka" 
              class="form-select" 
              required
              value={formData.presentTaluka}
              onChange={e => handleInputChange('presentTaluka', e.target.value)}
            >
              <option value="">Select Taluka</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Chirayinkeezhu">Chirayinkeezhu</option>
              <option value="Nedumangad">Nedumangad</option>
              <option value="Neyyattinkara">Neyyattinkara</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label class="form-label">Village / Town *</label>
            <div class="d-flex align-items-center gap-4 ps-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="area"
                  id="village"
                  value="Village"
                  checked={formData.presentTownOrVillage === "Village"}
                  onChange={e => handleInputChange('presentTownOrVillage', e.target.value)}
                />
                <label class="form-check-label" for="village">
                  Village
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="area"
                  id="town"
                  value="Town"
                  checked={formData.presentTownOrVillage === "Town"}
                  onChange={e => handleInputChange('presentTownOrVillage', e.target.value)}
                />
                <label class="form-check-label" for="town">
                  Town
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">House / Door / Flat No.</label>
            <input 
              type="text" 
              class="form-control" 
              value={formData.presentHouse}
              onChange={e => handleInputChange('presentHouse', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Street / Locality / Police Station</label>
            <input 
              type="text" 
              class="form-control" 
              value={formData.presentStreet}
              onChange={e => handleInputChange('presentStreet', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Location / Landmark *</label>
            <input 
              type="text" 
              class="form-control" 
              required 
              value={formData.presentLandmark}
              onChange={e => handleInputChange('presentLandmark', e.target.value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Pincode *</label>
            <input 
              type="text" 
              class="form-control" 
              required 
              value={formData.presentPincode}
              onChange={e => handleInputChange('presentPincode', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Duration of Stay (Years)</label>
            <input 
              type="number" 
              class="form-control" 
              value={formData.presentStayYears}
              onChange={e => handleInputChange('presentStayYears', e.target.value)}
            />
          </div>
          <div class="form-group">
            <label class="form-label">Duration of Stay (Months)</label>
            <input 
              type="number" 
              class="form-control" 
              value={formData.presentStayMonths}
              onChange={e => handleInputChange('presentStayMonths', e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
