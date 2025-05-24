'use client'

import { useState } from 'react'
import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>
          <UserForm onUserAdded={() => setRefreshKey(prev => prev + 1)} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Users List</h2>
          <UserList key={refreshKey} />
        </div>
      </div>
    </main>
  )
}
