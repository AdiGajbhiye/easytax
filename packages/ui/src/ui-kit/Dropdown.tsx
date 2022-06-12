import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { FieldError } from 'react-hook-form';

interface Option {
  text: string;
  value: string;
}

interface IProps {
  label: string;
  options: Option[];
  onChange: (s: string) => void;
  value?: string;
  placeholder?: string;
  error?: FieldError | undefined;
}

function Dropdown({ label, options, value, onChange, placeholder, error }: IProps) {
  return (
    <div className="flex flex-col m-2 w-full">
      <Listbox value={value} onChange={onChange}>
        <Listbox.Label>{label}</Listbox.Label>
        <div className="relative">
          <Listbox.Button className="flex justify-between w-full border border-solid border-orange-300 cursor-default rounded-lg bg-white p-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="truncate">{options.find((o) => o.value === value)?.text || placeholder || label}</span>
            <SelectorIcon className="h-5 w-5 text-gray-400 pointer-events-none" aria-hidden="true" />
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `flex justify-between cursor-default select-none p-3 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={option.value}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.text}
                      </span>
                      {selected && <CheckIcon className="h-5 w-5 text-amber-600" aria-hidden="true" />}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default Dropdown;
