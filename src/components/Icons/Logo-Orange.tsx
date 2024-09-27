import { cn } from '@/utils'
import React, { forwardRef } from 'react'
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode
}

const LogoOrange = forwardRef<SVGSVGElement, SVGProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={47}
        height={53}
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
          x={1}
          y={8}
          width={43}
          height={42}
        >
          <path d="M1.963 8.158h41.546v41.546H1.963V8.158Z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={8}
            width={43}
            height={42}
          >
            <path
              d="M22.736 8.158c-11.472 0-20.773 9.3-20.773 20.773 0 11.473 9.3 20.773 20.773 20.773 11.473 0 20.773-9.3 20.773-20.773 0-11.473-9.3-20.773-20.773-20.773Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#b)">
            <path d="M1.963 8.158h41.546v41.546H1.963V8.158Z" fill="#065884" />
          </g>
        </g>
        <mask
          id="c"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={5}
          width={47}
          height={47}
        >
          <path d="M0 5.78h46.101v46.101H0v-46.1Z" fill="#fff" />
        </mask>
        <g mask="url(#c)">
          <mask
            id="d"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={5}
            width={47}
            height={47}
          >
            <path
              d="M23.05 5.78C10.32 5.78 0 16.1 0 28.83c0 12.731 10.32 23.051 23.05 23.051 12.731 0 23.051-10.32 23.051-23.05S35.781 5.78 23.051 5.78Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#d)">
            <path d="M0 5.78h46.101v46.101H0v-46.1Z" fill="#FF5F01" />
          </g>
        </g>
        <mask
          id="e"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={10}
          width={38}
          height={38}
        >
          <path d="M4.556 10.336h36.99v36.99H4.555v-36.99Z" fill="#fff" />
        </mask>
        <g mask="url(#e)">
          <mask
            id="f"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={10}
            width={38}
            height={38}
          >
            <path
              d="M23.05 10.336c-10.214 0-18.494 8.28-18.494 18.494 0 10.215 8.28 18.496 18.495 18.496 10.214 0 18.494-8.28 18.494-18.496 0-10.214-8.28-18.494-18.494-18.494Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#f)">
            <path d="M4.556 10.336h36.99v36.99H4.555v-36.99Z" fill="#065884" />
          </g>
        </g>
        <mask
          id="g"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={10}
          y={0}
          width={26}
          height={23}
        >
          <path d="M10.775.674h24.63v21.525h-24.63V.674Z" fill="#fff" />
        </mask>
        <g mask="url(#g)">
          <mask
            id="h"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={10}
            y={0}
            width={26}
            height={23}
          >
            <path d="m23.075.674 12.3 21.525h-24.6L23.075.674Z" fill="#fff" />
          </mask>
          <g mask="url(#h)">
            <path d="M10.775.674h24.636v21.525H10.775V.674Z" fill="#FF5F01" />
          </g>
        </g>
        <mask
          id="i"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={19}
          y={43}
          width={9}
          height={8}
        >
          <path d="M19.523 43.799h7.77v7.053h-7.77v-7.053Z" fill="#fff" />
        </mask>
        <g mask="url(#i)">
          <mask
            id="j"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={19}
            y={43}
            width={9}
            height={8}
          >
            <path
              d="M23.397 43.799c-2.14 0-3.874 1.58-3.874 3.527s1.734 3.526 3.874 3.526c2.139 0 3.873-1.579 3.873-3.526 0-1.948-1.734-3.527-3.873-3.527Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#j)">
            <path
              d="M19.523 43.799h7.742v7.053h-7.742v-7.053Z"
              fill="#065884"
            />
          </g>
        </g>
        <mask
          id="k"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={21}
          y={44}
          width={5}
          height={6}
        >
          <path d="M21.02 44.948h4.755v4.756H21.02v-4.756Z" fill="#fff" />
        </mask>
        <g mask="url(#k)">
          <mask
            id="l"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={21}
            y={44}
            width={5}
            height={6}
          >
            <path
              d="M23.397 44.948a2.377 2.377 0 1 0 0 4.755 2.377 2.377 0 0 0 0-4.755Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#l)">
            <path d="M21.02 44.948h4.755v4.756H21.02v-4.756Z" fill="#FF5F01" />
          </g>
        </g>
        <mask
          id="m"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={10}
          y={0}
          width={27}
          height={16}
        >
          <path d="M10.041 0h26.107v15.725H10.04V0Z" fill="#fff" />
        </mask>
        <g mask="url(#m)">
          <mask
            id="n"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={10}
            y={0}
            width={27}
            height={16}
          >
            <path d="M23.076 0 36.11 15.725H10.041L23.076 0Z" fill="#fff" />
          </mask>
          <g mask="url(#n)">
            <path d="M10.041 0h26.045v15.725H10.041V0Z" fill="#065884" />
          </g>
        </g>
        <mask
          id="o"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={10}
          y={10}
          width={27}
          height={13}
        >
          <path d="M10.041 10.336h26.09v11.863H10.04V10.336Z" fill="#fff" />
        </mask>
        <g mask="url(#o)">
          <mask
            id="p"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={10}
            y={10}
            width={27}
            height={13}
          >
            <path
              d="M23.076 10.336 36.11 22.199H10.041l13.035-11.863Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#p)">
            <path
              d="M10.041 10.336h26.09v11.863H10.04V10.336Z"
              fill="#FF5F01"
            />
          </g>
        </g>
        <mask
          id="q"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={8}
          y={12}
          width={30}
          height={13}
        >
          <path d="M8.188 12.268h29.746v11.75H8.188v-11.75Z" fill="#fff" />
        </mask>
        <g mask="url(#q)">
          <mask
            id="r"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={8}
            y={12}
            width={30}
            height={13}
          >
            <path
              d="m23.05 12.268 14.862 11.75H8.188l14.863-11.75Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#r)">
            <path d="M8.188 12.268h29.746v11.75H8.188v-11.75Z" fill="#065884" />
          </g>
        </g>
        <mask
          id="s"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={19}
          y={20}
          width={4}
          height={4}
        >
          <path d="M19.303 20.57h3.433v3.257h-3.433V20.57Z" fill="#fff" />
        </mask>
        <g mask="url(#s)">
          <path d="M19.303 20.57h3.434v3.257h-3.434V20.57Z" fill="#FF5F01" />
        </g>
        <mask
          id="t"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={20}
          width={4}
          height={4}
        >
          <path d="M23.397 20.57h3.434v3.257h-3.434V20.57Z" fill="#fff" />
        </mask>
        <g mask="url(#t)">
          <path d="M23.397 20.57h3.435v3.257h-3.435V20.57Z" fill="#FF5F01" />
        </g>
        <mask
          id="u"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={19}
          y={16}
          width={4}
          height={5}
        >
          <path d="M19.303 16.901h3.433v3.257h-3.433v-3.257Z" fill="#fff" />
        </mask>
        <g mask="url(#u)">
          <path d="M19.303 16.901h3.434v3.257h-3.434v-3.257Z" fill="#FF5F01" />
        </g>
        <mask
          id="v"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={16}
          width={4}
          height={5}
        >
          <path d="M23.397 16.901h3.434v3.257h-3.434v-3.257Z" fill="#fff" />
        </mask>
        <g mask="url(#v)">
          <path d="M23.397 16.901h3.435v3.257h-3.435v-3.257Z" fill="#FF5F01" />
        </g>
        <mask
          id="w"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={18}
          y={15}
          width={5}
          height={4}
        >
          <path d="M18.35 15.28h4.592v3.718H18.35V15.28Z" fill="#fff" />
        </mask>
        <g mask="url(#w)">
          <mask
            id="x"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={18}
            y={15}
            width={5}
            height={4}
          >
            <path
              d="m18.413 17.298 3.41-1.948.914 1.598-3.412 1.948-.912-1.598Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#x)">
            <path
              d="m18.413 17.298 3.408-1.946.912 1.598-3.408 1.946-.912-1.598Z"
              fill="#065884"
            />
          </g>
        </g>
        <mask
          id="y"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={15}
          width={5}
          height={4}
        >
          <path d="M23.379 15.062h4.373v3.717H23.38v-3.717Z" fill="#fff" />
        </mask>
        <g mask="url(#y)">
          <mask
            id="z"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={23}
            y={15}
            width={5}
            height={4}
          >
            <path
              d="m24.173 15.24 3.562 1.655-.777 1.67-3.561-1.657.776-1.669Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#z)">
            <path
              d="m24.173 15.24 3.558 1.655-.775 1.668-3.56-1.655.777-1.669Z"
              fill="#065884"
            />
          </g>
        </g>
        <mask
          id="A"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={22}
          y={40}
          width={2}
          height={10}
        >
          <path d="M22.974 40.776h.847v8.928h-.847v-8.928Z" fill="#fff" />
        </mask>
        <g mask="url(#A)">
          <path d="M22.974 40.776h.847v8.928h-.847v-8.928Z" fill="#065884" />
        </g>
        <mask
          id="B"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={20}
          y={46}
          width={7}
          height={2}
        >
          <path d="M20.759 46.898h5.273v.853h-5.273v-.853Z" fill="#fff" />
        </mask>
        <g mask="url(#B)">
          <path d="M26.031 46.898v.853h-5.273v-.853h5.273Z" fill="#065884" />
        </g>
        <path
          d="M14.561 37.62c0-.616.067-1.136.202-1.557.134-.424.353-.81.659-1.159.307-.348.74-.724 1.298-1.127l1.49-1.077c.407-.29.724-.543.95-.755.227-.213.398-.438.512-.673.116-.234.175-.502.175-.803 0-.452-.139-.803-.414-1.049-.276-.247-.688-.372-1.237-.372-.531 0-1.003.127-1.414.38a3.047 3.047 0 0 0-1.022 1.035l-.147.037-1.213-1.36a4.514 4.514 0 0 1 1.552-1.424c.64-.36 1.416-.54 2.33-.54.833 0 1.531.138 2.094.413.562.276.98.652 1.254 1.128.273.476.41 1.021.41 1.636 0 .532-.112 1.015-.335 1.452a4.477 4.477 0 0 1-.919 1.217c-.392.371-.894.771-1.507 1.199l-1.318.922c-.4.286-.677.54-.834.762a1.265 1.265 0 0 0-.236.752h5.04v1.848h-7.37v-.885ZM29.549 38.505h-2.115v-2.429h-5.087v-1.78l4.376-6.96h2.826v6.96h1.719v1.78h-1.719v2.43Zm-4.94-4.37.068.161h2.757v-4.322l-.178-.03-2.648 4.192Z"
          fill="#FF5F01"
        />
      </svg>
    )
  }
)

LogoOrange.displayName = 'LogoOrange'
export default LogoOrange
