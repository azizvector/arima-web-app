import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { isEmpty } from 'lodash';
import { Fragment } from 'react';
import { Controller, Control } from "react-hook-form";

export interface Option {
  key: number;
  label: string;
}

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  options: Option[];
  control: Control<any> | undefined;
  disabled?: boolean;
  error?: string;
}

export function Select({
  label,
  name,
  placeholder,
  options,
  control,
  disabled,
  error
}: Props): React.ReactElement {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        <Listbox
          value={field?.value}
          name={field?.name}
          disabled={disabled}
          onChange={field?.onChange}
        >
          {({ open }) => (
            <div>
              {!isEmpty(label) && (
                <Listbox.Label className="block leading-6 text-[#464E5F] font-medium mb-2">
                  {label}
                </Listbox.Label>
              )}
              <div className="relative">
                <Listbox.Button
                  className={classNames(
                    'block w-full p-3 rounded border text-[#464E5F] h-11 leading-4 focus:outline-none disabled:bg-[#F3F6F9]', {
                    'border-[#DD2525]': error,
                    'border-[#E4E6EF]': !error
                  })}
                >
                  <span
                    className={classNames(
                      'flex items-center', {
                      'text-[#464E5F]': field.value !== undefined,
                      'text-[#BDBDBD]': field.value === undefined
                    })}
                  >
                    {options.find((opt) => opt.key === field?.value?.key)?.label || placeholder}
                  </span>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDownIcon className="w-5 h-5 text-[#464E5F] ml-3" />
                  </div>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options?.map((option) => (
                      <Listbox.Option
                        key={option.key}
                        className={({ active }) =>
                          classNames(
                            'relative cursor-default select-none py-2 pl-3 pr-9', {
                            'bg-indigo-600 text-white': active,
                            'text-[#262626]': !active
                          })
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  'ml-3 block truncate', {
                                  'font-semibold': selected,
                                  'font-normal': !selected
                                })}
                              >
                                {option.label}
                              </span>
                            </div>
                            {selected && (
                              <span
                                className={classNames(
                                  'absolute inset-y-0 right-0 flex items-center pr-4', {
                                  'text-white': active,
                                  'text-indigo-600': !active
                                })}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
              {error && (
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0.5C5.21442 0.5 3.95772 0.881218 2.8888 1.59545C1.81988 2.30968 0.986756 3.32484 0.494786 4.51256C0.00281635 5.70028 -0.125905 7.00721 0.124899 8.26809C0.375703 9.52896 0.994767 10.6872 1.90381 11.5962C2.81285 12.5052 3.97104 13.1243 5.23192 13.3751C6.49279 13.6259 7.79973 13.4972 8.98744 13.0052C10.1752 12.5132 11.1903 11.6801 11.9046 10.6112C12.6188 9.54229 13 8.28558 13 7C12.9967 5.27711 12.3108 3.62573 11.0925 2.40746C9.87428 1.18918 8.22289 0.503304 6.5 0.5ZM6 4C6 3.86739 6.05268 3.74021 6.14645 3.64645C6.24022 3.55268 6.36739 3.5 6.5 3.5C6.63261 3.5 6.75979 3.55268 6.85356 3.64645C6.94732 3.74021 7 3.86739 7 4V7.5C7 7.63261 6.94732 7.75979 6.85356 7.85355C6.75979 7.94732 6.63261 8 6.5 8C6.36739 8 6.24022 7.94732 6.14645 7.85355C6.05268 7.75979 6 7.63261 6 7.5V4ZM6.5 10.5C6.35167 10.5 6.20666 10.456 6.08333 10.3736C5.95999 10.2912 5.86386 10.1741 5.80709 10.037C5.75033 9.89997 5.73548 9.74917 5.76441 9.60368C5.79335 9.4582 5.86478 9.32456 5.96967 9.21967C6.07456 9.11478 6.2082 9.04335 6.35368 9.01441C6.49917 8.98547 6.64997 9.00033 6.78701 9.05709C6.92406 9.11386 7.04119 9.20999 7.1236 9.33332C7.20602 9.45666 7.25 9.60166 7.25 9.75C7.25 9.94891 7.17098 10.1397 7.03033 10.2803C6.88968 10.421 6.69892 10.5 6.5 10.5Z"
                      fill="#DA2D1F"
                    />
                  </svg>
                  <p className="text-xs text-[#DA2D1F]">{error}</p>
                </div>
              )}
            </div>
          )}
        </Listbox >
      }
    />

  );
}
