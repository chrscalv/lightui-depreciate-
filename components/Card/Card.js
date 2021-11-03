import { forwardRef } from "react";
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const titleColors = {
  lightBlue : 'bg-blue-400',
	blue : 'bg-blue-400',
	darkBlue : 'bg-blue-900',
	yellow : 'bg-yellow-800',
	lime : 'bg-lime-700'
}

const subTitleColors = {}

const Card = forwardRef((
    {
        children,
        title,
        subtitle,
        size,
        width,
        height,
        loading
    }, ref
) => (
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/200/300" alt="Man looking at item at a store" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">HAllo World</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Lorem ipsum dolor </a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
))

export default Card;