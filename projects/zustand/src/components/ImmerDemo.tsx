import { useCartStore } from "../store/cartStore";

export const ImmerDemo = () => {
  const { updateUserCountry, user } = useCartStore();

  return (
    <div>
      Immer Demo Component
      <h3>
        Current Country: {user.address.country.name} (
        {user.address.country.default})
      </h3>
      <button
        onClick={() =>
          updateUserCountry({ default: "US", name: "United States" })
        }
      >
        Update Country to US
      </button>
      <button
        onClick={() => updateUserCountry({ default: "CA", name: "Canada" })}
      >
        Update Country to Canada
      </button>
    </div>
  );
};
