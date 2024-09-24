import { cn } from '@/utils'
import React, { forwardRef } from 'react'
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode
}

const LogoWhite = forwardRef<SVGSVGElement, SVGProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={82}
        height={82}
        viewBox="0 0 29 28"
        fill="none"
        className={cn(className)}
        ref={ref}
        {...props}
      >
        <mask
          id="a"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={17}
          y={21}
          width={43}
          height={43}
        >
          <path d="M17.507 21.523h41.546V63.07H17.507V21.523Z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={17}
            y={21}
            width={43}
            height={43}
          >
            <path
              d="M38.28 21.523c-11.472 0-20.773 9.3-20.773 20.773 0 11.473 9.3 20.773 20.773 20.773 11.472 0 20.773-9.3 20.773-20.773 0-11.473-9.3-20.773-20.773-20.773Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#b)">
            <path
              d="M17.507 21.523h41.546V63.07H17.507V21.523Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="c"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={15}
          y={19}
          width={47}
          height={47}
        >
          <path d="M15.544 19.145h46.101v46.101H15.544v-46.1Z" fill="#fff" />
        </mask>
        <g mask="url(#c)">
          <mask
            id="d"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={15}
            y={19}
            width={47}
            height={47}
          >
            <path
              d="M38.594 19.145c-12.73 0-23.05 10.32-23.05 23.05 0 12.731 10.32 23.051 23.05 23.051 12.731 0 23.051-10.32 23.051-23.05s-10.32-23.05-23.05-23.05Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#d)">
            <path
              d="M15.544 19.145h46.101v46.101H15.544v-46.1Z"
              fill="#E9E9E9"
            />
          </g>
        </g>
        <mask
          id="e"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={20}
          y={23}
          width={38}
          height={38}
        >
          <path d="M20.1 23.701h36.99v36.99H20.1v-36.99Z" fill="#fff" />
        </mask>
        <g mask="url(#e)">
          <mask
            id="f"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={20}
            y={23}
            width={38}
            height={38}
          >
            <path
              d="M38.595 23.701c-10.215 0-18.495 8.28-18.495 18.495 0 10.215 8.28 18.495 18.495 18.495 10.214 0 18.494-8.28 18.494-18.495 0-10.214-8.28-18.495-18.494-18.495Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#f)">
            <path d="M20.1 23.701h36.99v36.99H20.1v-36.99Z" fill="#0F0C36" />
          </g>
        </g>
        <mask
          id="g"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={26}
          y={14}
          width={25}
          height={22}
        >
          <path d="M26.32 14.04h24.63v21.524H26.32V14.04Z" fill="#fff" />
        </mask>
        <g mask="url(#g)">
          <mask
            id="h"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={26}
            y={14}
            width={25}
            height={22}
          >
            <path d="m38.62 14.04 12.3 21.524h-24.6l12.3-21.525Z" fill="#fff" />
          </mask>
          <g mask="url(#h)">
            <path d="M26.32 14.04h24.635v21.524H26.32V14.04Z" fill="#E9E9E9" />
          </g>
        </g>
        <mask
          id="i"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={35}
          y={57}
          width={8}
          height={8}
        >
          <path d="M35.067 57.164h7.77v7.053h-7.77v-7.053Z" fill="#fff" />
        </mask>
        <g mask="url(#i)">
          <mask
            id="j"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={35}
            y={57}
            width={8}
            height={8}
          >
            <path
              d="M38.941 57.164c-2.14 0-3.874 1.58-3.874 3.527s1.734 3.526 3.874 3.526c2.139 0 3.873-1.579 3.873-3.526 0-1.948-1.734-3.527-3.873-3.527Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#j)">
            <path
              d="M35.067 57.164h7.743v7.053h-7.743v-7.053Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="k"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={36}
          y={58}
          width={6}
          height={6}
        >
          <path d="M36.563 58.313h4.756v4.756h-4.756v-4.756Z" fill="#fff" />
        </mask>
        <g mask="url(#k)">
          <mask
            id="l"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={36}
            y={58}
            width={6}
            height={6}
          >
            <path
              d="M38.941 58.313a2.378 2.378 0 1 0 0 4.755 2.378 2.378 0 0 0 0-4.755Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#l)">
            <path
              d="M36.563 58.313h4.756v4.756h-4.756v-4.756Z"
              fill="#E9E9E9"
            />
          </g>
        </g>
        <mask
          id="m"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={25}
          y={13}
          width={27}
          height={17}
        >
          <path d="M25.585 13.365h26.107V29.09H25.585V13.365Z" fill="#fff" />
        </mask>
        <g mask="url(#m)">
          <mask
            id="n"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={25}
            y={13}
            width={27}
            height={17}
          >
            <path
              d="M38.62 13.365 51.654 29.09H25.585L38.62 13.365Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#n)">
            <path
              d="M25.585 13.365H51.63V29.09H25.585V13.365Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="o"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={25}
          y={23}
          width={27}
          height={13}
        >
          <path d="M25.585 23.701h26.09v11.863h-26.09V23.701Z" fill="#fff" />
        </mask>
        <g mask="url(#o)">
          <mask
            id="p"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={25}
            y={23}
            width={27}
            height={13}
          >
            <path
              d="m38.62 23.701 13.034 11.863H25.585L38.62 23.701Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#p)">
            <path
              d="M25.585 23.701h26.09v11.863h-26.09V23.701Z"
              fill="#E9E9E9"
            />
          </g>
        </g>
        <mask
          id="q"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={25}
          width={31}
          height={13}
        >
          <path d="M23.732 25.633h29.746v11.75H23.732v-11.75Z" fill="#fff" />
        </mask>
        <g mask="url(#q)">
          <mask
            id="r"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={23}
            y={25}
            width={31}
            height={13}
          >
            <path
              d="m38.595 25.633 14.862 11.75H23.732l14.863-11.75Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#r)">
            <path
              d="M23.732 25.633h29.746v11.75H23.732v-11.75Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="s"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={34}
          y={33}
          width={5}
          height={5}
        >
          <path d="M34.847 33.936h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#s)">
          <path d="M34.847 33.936h3.434v3.256h-3.434v-3.256Z" fill="#E9E9E9" />
        </g>
        <mask
          id="t"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={38}
          y={33}
          width={5}
          height={5}
        >
          <path d="M38.941 33.936h3.434v3.256h-3.434v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#t)">
          <path d="M38.941 33.936h3.435v3.256h-3.435v-3.256Z" fill="#E9E9E9" />
        </g>
        <mask
          id="u"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={34}
          y={30}
          width={5}
          height={4}
        >
          <path d="M34.847 30.267h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#u)">
          <path d="M34.847 30.267h3.434v3.256h-3.434v-3.256Z" fill="#E9E9E9" />
        </g>
        <mask
          id="v"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={38}
          y={30}
          width={5}
          height={4}
        >
          <path d="M38.941 30.267h3.434v3.256h-3.434v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#v)">
          <path d="M38.941 30.267h3.435v3.256h-3.435v-3.256Z" fill="#E9E9E9" />
        </g>
        <mask
          id="w"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={33}
          y={28}
          width={6}
          height={5}
        >
          <path d="M33.894 28.645h4.592v3.718h-4.592v-3.718Z" fill="#fff" />
        </mask>
        <g mask="url(#w)">
          <mask
            id="x"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={33}
            y={28}
            width={6}
            height={5}
          >
            <path
              d="m33.957 30.663 3.41-1.948.914 1.598-3.412 1.948-.912-1.598Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#x)">
            <path
              d="m33.957 30.663 3.408-1.946.912 1.598-3.408 1.946-.912-1.598Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="y"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={38}
          y={28}
          width={6}
          height={5}
        >
          <path d="M38.923 28.427h4.373v3.717h-4.373v-3.717Z" fill="#fff" />
        </mask>
        <g mask="url(#y)">
          <mask
            id="z"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={38}
            y={28}
            width={6}
            height={4}
          >
            <path
              d="m39.717 28.604 3.562 1.657-.777 1.669-3.562-1.657.777-1.669Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#z)">
            <path
              d="m39.717 28.604 3.558 1.656-.775 1.668-3.56-1.655.777-1.669Z"
              fill="#0F0C36"
            />
          </g>
        </g>
        <mask
          id="A"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={38}
          y={54}
          width={2}
          height={10}
        >
          <path d="M38.518 54.141h.847v8.928h-.847v-8.928Z" fill="#fff" />
        </mask>
        <g mask="url(#A)">
          <path d="M38.518 54.141h.847v8.928h-.847v-8.928Z" fill="#0F0C36" />
        </g>
        <mask
          id="B"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={36}
          y={60}
          width={6}
          height={2}
        >
          <path d="M36.303 60.264h5.273v.852h-5.273v-.852Z" fill="#fff" />
        </mask>
        <g mask="url(#B)">
          <path d="M41.575 60.264v.852h-5.273v-.852h5.273Z" fill="#0F0C36" />
        </g>
        <path
          d="M30.105 50.986c0-.617.067-1.136.201-1.558.135-.424.354-.81.66-1.158.307-.349.74-.725 1.298-1.128l1.49-1.076c.407-.291.724-.544.95-.755a2.34 2.34 0 0 0 .512-.673c.116-.234.175-.503.175-.803 0-.453-.139-.803-.414-1.05-.276-.247-.688-.372-1.237-.372-.531 0-1.003.127-1.414.38a3.047 3.047 0 0 0-1.022 1.035l-.147.037-1.213-1.36a4.515 4.515 0 0 1 1.552-1.424c.64-.36 1.416-.54 2.33-.54.833 0 1.531.138 2.094.413.562.276.98.652 1.254 1.128.273.477.41 1.021.41 1.636a3.15 3.15 0 0 1-.335 1.453 4.477 4.477 0 0 1-.919 1.216c-.392.371-.894.771-1.507 1.2l-1.319.922c-.398.285-.676.539-.833.762a1.266 1.266 0 0 0-.236.751h5.04v1.849h-7.37v-.885ZM45.093 51.87h-2.115v-2.428h-5.087v-1.78l4.376-6.96h2.826v6.96h1.718v1.78h-1.718v2.429Zm-4.94-4.37.068.161h2.757V43.34l-.178-.03-2.647 4.192Z"
          fill="#E9E9E9"
        />
      </svg>
    )
  }
)

LogoWhite.displayName = 'LogoWhite'
export default LogoWhite
