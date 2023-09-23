
function Dashboard() {
  return (
    <div className="container mx-auto p-4 ">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">Total Expenses</h2>
                    <p className="flex-1 text-2xl text-end">$12,345</p>
                </div>

                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">This Month</h2>
                    <p className="flex-1 text-2xl text-end">$12,345</p>
                </div>

                <div className="flex">
                    <h2 className="flex-1 text-xl font-semibold mb-2">Last Month</h2>
                    <p className="flex-1 text-2xl text-end">$12,345</p>
                </div>
                
            </div>
    </div>

  )
}

export default Dashboard;