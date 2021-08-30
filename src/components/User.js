export default function User({ user }) {
  return (
    <li className="flex space-x-4 items-center py-2">
      <div className="bg-gradient-to-tl from-sky-400 to-fuchsia-600 rounded-full p-0.5 transform hover:rotate-45 transition ease-in-out duration-250">
        <div className="bg-white rounded-full p-1">
          <img
            src={user.picture.medium}
            className="rounded-full w-12 h-12"
            alt="image"
          />
        </div>
      </div>

      <div>
        <h3 className="text-gray-900">
          {user.name.first} {user.name.last}
        </h3>
        <span className="text-gray-500 text-sm">
          {user.location.state}, {user.location.country}
        </span>
      </div>
    </li>
  )
}
