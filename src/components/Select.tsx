interface AppSelectProps {
  id: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
  options: any[];
}
export default function AppSelect({
  id,
  name,
  value,
  setValue,
  options,
}: AppSelectProps) {
  const dropdownButton = document.getElementById("dropdown-button" + id);
  const dropdownMenu = document.getElementById("dropdown-menu" + id);
  const searchInput = document.getElementById("search-input" + id);
  let isOpen = false; // Set to true to open the dropdown by default

  // Function to toggle the dropdown state
  function toggleDropdown() {
    isOpen = !isOpen;
    dropdownMenu?.classList.toggle("hidden", !isOpen);
  }
  function closeDropDown() {
    dropdownMenu?.classList.toggle("hidden", true);
  }

  // Set initial state
  //   toggleDropdown();

  dropdownButton?.addEventListener("click", () => {
    toggleDropdown();
  });

  // Add event listener to filter items based on input
  searchInput?.addEventListener("input", () => {
    const searchTerm = (searchInput as HTMLInputElement).value.toLowerCase();
    const items = dropdownMenu?.querySelectorAll<HTMLAnchorElement>("a");

    items?.forEach((item: any) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  console.log(options[0]?.name);
  return (
    <>
      <div className="relative group">
        <button
          id={"dropdown-button" + id}
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          <span className="mr-2">{value || "Select an option"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          id={"dropdown-menu" + id}
          className="w-full h-50 hidden overflow-scroll absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
        >
          <input
            id={"search-input" + id}
            name={name}
            className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
          />
          {options.map((option: any, index: number) => (
            <a
              key={index}
              onClick={() => {
                closeDropDown();
                setValue(option?.value || option);
              }}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            >
              {option?.name || option}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
