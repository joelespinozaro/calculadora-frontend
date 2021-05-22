export default function InputDefault({
  id,
  type,
  placeholder,
  label,
  defaultValue,
  disabled,
}) {
  return (
    <>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <input
          id={id}
          name={id}
          type={type}
          autoComplete="off"
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          required
        />
      </dd>
    </>
  );
}
