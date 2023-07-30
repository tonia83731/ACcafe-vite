

export default function CartForm({ formData, onFormChange }) {
  return (
    <div className="bg-white-60 w-full">
      <div className="px-2 pt-2 pb-4">
        <div className="title text-xl font-bold mb-4 tablet:text-2xl">
          Recipient Info.
        </div>
        <div className="px-2 pb-2">
          <div>
            <div className="grid gap-2 grid-cols-2">
              <div>
                <label htmlFor="first-name" className="font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                  id="first-name"
                  placeholder=""
                  value={formData.firstname}
                  onChange={onFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                  id="last-name"
                  placeholder=""
                  value={formData.lastname}
                  onChange={onFormChange}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="phoneNum" className="font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNum"
                className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                id="phoneNum"
                placeholder=""
                value={formData.phoneNum}
                onChange={onFormChange}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                id="address"
                placeholder=""
                value={formData.address}
                onChange={onFormChange}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}