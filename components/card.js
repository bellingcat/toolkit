export default function Card(props) {
  return (
    <a href={props.href}>
      <div className="max-w-sm rounded overflow-hidden border mb-4">
        <div className="px-6 py-4 hover:text-blue-500">
          <div className="font-bold text-xl mb-2 text-inherit">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </a>
  );
}
