export default function NavBar({
  handleLogout,
  setShowForm
}: {
  username?: string;
  handleLogout: () => void;
    setShowForm: (value: boolean) => void;
}) {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-5 items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center fontWeight:bold">
            <h2 style={{textTransform:"uppercase"}} className="text-2xl/10 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight text-transform:uppercase">Record Data</h2>
            </div>
            <div className=" gap-2 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                onClick={() => setShowForm(true)}
              >
                Create Office
              </button>
              <button
                onClick={handleLogout}
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
              >
                <span className="absolute -inset-1.5"></span>
                <span>logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
