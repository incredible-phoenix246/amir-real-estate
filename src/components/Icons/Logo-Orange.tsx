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
          x={2}
          y={8}
          width={43}
          height={43}
        >
          <path d="M2.463 8.523h41.546V50.07H2.463V8.523Z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <mask
            id="b"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={2}
            y={8}
            width={43}
            height={43}
          >
            <path
              d="M23.236 8.523c-11.472 0-20.773 9.3-20.773 20.773 0 11.473 9.3 20.773 20.773 20.773 11.473 0 20.773-9.3 20.773-20.773 0-11.472-9.3-20.773-20.773-20.773Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#b)">
            <path d="M2.463 8.523h41.546V50.07H2.463V8.523Z" fill="#fff" />
          </g>
        </g>
        <mask
          id="c"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={6}
          width={47}
          height={47}
        >
          <path d="M.5 6.146h46.101v46.1H.5v-46.1Z" fill="#fff" />
        </mask>
        <g mask="url(#c)">
          <mask
            id="d"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={6}
            width={47}
            height={47}
          >
            <path
              d="M23.55 6.146C10.82 6.146.5 16.466.5 29.196s10.32 23.05 23.05 23.05c12.731 0 23.051-10.32 23.051-23.05s-10.32-23.05-23.05-23.05Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#d)">
            <path d="M.5 6.146h46.101v46.1H.5v-46.1Z" fill="#FF5F01" />
          </g>
        </g>
        <mask
          id="e"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={5}
          y={10}
          width={38}
          height={38}
        >
          <path d="M5.056 10.701h36.99v36.99H5.055V10.7Z" fill="#fff" />
        </mask>
        <g mask="url(#e)">
          <mask
            id="f"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={5}
            y={10}
            width={38}
            height={38}
          >
            <path
              d="M23.55 10.701c-10.214 0-18.494 8.28-18.494 18.495 0 10.215 8.28 18.495 18.495 18.495 10.214 0 18.494-8.28 18.494-18.495 0-10.215-8.28-18.495-18.494-18.495Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#f)">
            <path d="M5.056 10.701h36.99v36.99H5.055V10.7Z" fill="#fff" />
          </g>
        </g>
        <mask
          id="g"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={11}
          y={1}
          width={25}
          height={22}
        >
          <path d="M11.275 1.04h24.63v21.524h-24.63V1.04Z" fill="#fff" />
        </mask>
        <g mask="url(#g)">
          <mask
            id="h"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={11}
            y={1}
            width={25}
            height={22}
          >
            <path d="m23.575 1.04 12.3 21.524h-24.6l12.3-21.525Z" fill="#fff" />
          </mask>
          <g mask="url(#h)">
            <path d="M11.275 1.04h24.636v21.524H11.275V1.04Z" fill="#FF5F01" />
          </g>
        </g>
        <mask
          id="i"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={20}
          y={44}
          width={8}
          height={8}
        >
          <path d="M20.023 44.164h7.77v7.053h-7.77v-7.053Z" fill="#fff" />
        </mask>
        <g mask="url(#i)">
          <mask
            id="j"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={20}
            y={44}
            width={8}
            height={8}
          >
            <path
              d="M23.897 44.164c-2.14 0-3.874 1.58-3.874 3.527s1.734 3.526 3.874 3.526c2.139 0 3.873-1.579 3.873-3.526 0-1.948-1.734-3.527-3.873-3.527Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#j)">
            <path d="M20.023 44.164h7.743v7.053h-7.743v-7.053Z" fill="#fff" />
          </g>
        </g>
        <mask
          id="k"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={21}
          y={45}
          width={6}
          height={6}
        >
          <path d="M21.52 45.313h4.756v4.756H21.52v-4.756Z" fill="#fff" />
        </mask>
        <g mask="url(#k)">
          <mask
            id="l"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={21}
            y={45}
            width={6}
            height={6}
          >
            <path
              d="M23.898 45.313a2.378 2.378 0 1 0-.001 4.755 2.378 2.378 0 0 0 0-4.755Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#l)">
            <path d="M21.52 45.313h4.756v4.756H21.52v-4.756Z" fill="#FF5F01" />
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
          height={17}
        >
          <path d="M10.541.365h26.107V16.09H10.54V.365Z" fill="#fff" />
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
            height={17}
          >
            <path d="M23.576.365 36.61 16.09H10.541L23.576.365Z" fill="#fff" />
          </mask>
          <g mask="url(#n)">
            <path d="M10.541.365h26.045V16.09H10.541V.365Z" fill="#fff" />
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
          <path d="M10.541 10.701h26.09v11.863H10.54V10.7Z" fill="#fff" />
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
              d="M23.576 10.701 36.61 22.564H10.541L23.576 10.7Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#p)">
            <path d="M10.541 10.701h26.09v11.863H10.54V10.7Z" fill="#FF5F01" />
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
          width={31}
          height={13}
        >
          <path d="M8.688 12.633h29.746v11.75H8.688v-11.75Z" fill="#fff" />
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
            width={31}
            height={13}
          >
            <path
              d="m23.551 12.633 14.862 11.75H8.688l14.863-11.75Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#r)">
            <path d="M8.688 12.633h29.746v11.75H8.688v-11.75Z" fill="#fff" />
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
          width={5}
          height={5}
        >
          <path d="M19.803 20.936h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#s)">
          <path d="M19.803 20.936h3.434v3.256h-3.434v-3.256Z" fill="#FF5F01" />
        </g>
        <mask
          id="t"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={20}
          width={5}
          height={5}
        >
          <path d="M23.898 20.936h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#t)">
          <path d="M23.898 20.936h3.434v3.256h-3.434v-3.256Z" fill="#FF5F01" />
        </g>
        <mask
          id="u"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={19}
          y={17}
          width={5}
          height={4}
        >
          <path d="M19.803 17.267h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#u)">
          <path d="M19.803 17.267h3.434v3.256h-3.434v-3.256Z" fill="#FF5F01" />
        </g>
        <mask
          id="v"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={17}
          width={5}
          height={4}
        >
          <path d="M23.898 17.267h3.433v3.256h-3.433v-3.256Z" fill="#fff" />
        </mask>
        <g mask="url(#v)">
          <path d="M23.898 17.267h3.434v3.256h-3.434v-3.256Z" fill="#FF5F01" />
        </g>
        <mask
          id="w"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={18}
          y={15}
          width={6}
          height={5}
        >
          <path d="M18.85 15.646h4.592v3.717H18.85v-3.717Z" fill="#fff" />
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
            width={6}
            height={5}
          >
            <path
              d="m18.913 17.663 3.41-1.948.914 1.599-3.412 1.947-.912-1.598Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#x)">
            <path
              d="m18.913 17.663 3.408-1.946.912 1.598-3.408 1.946-.912-1.598Z"
              fill="#fff"
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
          width={6}
          height={5}
        >
          <path d="M23.879 15.427h4.373v3.717H23.88v-3.717Z" fill="#fff" />
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
            width={6}
            height={4}
          >
            <path
              d="m24.673 15.604 3.562 1.657-.777 1.669-3.561-1.657.776-1.668Z"
              fill="#fff"
            />
          </mask>
          <g mask="url(#z)">
            <path
              d="m24.673 15.604 3.558 1.656-.775 1.668-3.56-1.655.777-1.668Z"
              fill="#fff"
            />
          </g>
        </g>
        <mask
          id="A"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={23}
          y={41}
          width={2}
          height={10}
        >
          <path d="M23.474 41.142h.847v8.927h-.847v-8.927Z" fill="#fff" />
        </mask>
        <g mask="url(#A)">
          <path d="M23.474 41.142h.847v8.927h-.847v-8.927Z" fill="#fff" />
        </g>
        <mask
          id="B"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={21}
          y={47}
          width={6}
          height={2}
        >
          <path d="M21.259 47.264h5.273v.852h-5.273v-.852Z" fill="#fff" />
        </mask>
        <g mask="url(#B)">
          <path d="M26.531 47.264v.852h-5.273v-.852h5.273Z" fill="#fff" />
        </g>
        <path
          d="M15.061 37.986c0-.617.067-1.136.202-1.558.134-.424.353-.81.659-1.158.308-.349.74-.725 1.298-1.128l1.49-1.076c.407-.291.724-.544.95-.755a2.34 2.34 0 0 0 .512-.673c.116-.234.175-.503.175-.803 0-.453-.139-.803-.414-1.05-.276-.247-.688-.372-1.237-.372-.531 0-1.003.127-1.414.38a3.047 3.047 0 0 0-1.022 1.035l-.147.037-1.213-1.36a4.514 4.514 0 0 1 1.552-1.424c.64-.36 1.416-.54 2.33-.54.833 0 1.531.138 2.094.413.562.276.98.652 1.254 1.128.273.477.41 1.021.41 1.636 0 .532-.112 1.015-.335 1.453a4.475 4.475 0 0 1-.919 1.216c-.392.371-.894.771-1.507 1.2l-1.318.922c-.4.285-.677.539-.834.762a1.265 1.265 0 0 0-.236.751h5.04v1.849h-7.37v-.885ZM30.049 38.87h-2.115v-2.428h-5.087v-1.78l4.376-6.96h2.826v6.96h1.719v1.78h-1.719v2.429Zm-4.94-4.37.068.161h2.757V30.34l-.178-.03-2.648 4.192Z"
          fill="#FF5F01"
        />
      </svg>
    )
  }
)

LogoOrange.displayName = 'LogoOrange'
export default LogoOrange
