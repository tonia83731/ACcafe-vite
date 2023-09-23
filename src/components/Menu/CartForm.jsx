

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
                <label htmlFor="cart-name" className="font-medium">
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                  id="cart-name"
                  placeholder=""
                  value={formData.name}
                  onChange={onFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="cart-tel" className="">
                  Phone Number <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  name="tel"
                  className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                  id="cart-tel"
                  placeholder=""
                  value={formData.tel}
                  onChange={onFormChange}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="cart-email" className="font-medium">
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                id="cart-email"
                placeholder=""
                value={formData.email}
                onChange={onFormChange}
                required
              />
            </div>
            <div className="mt-2">
              <label htmlFor="cart-address" className="font-medium">
                Address <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="address"
                className="w-full rounded px-4 bg-white-80 focus:border-2 focus:border-grullo-80"
                id="cart-address"
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