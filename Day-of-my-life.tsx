"use client"

import { useEffect, useRef } from "react"
import { Chart, type ChartConfiguration, type ChartData, type ChartTypeRegistry } from "chart.js/auto"

export default function DayLifeChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    const data: ChartData = {
      labels: [
        "Sleep, beautiful sleep",
        "Hopeful novelist by night",
        "Daytime job and Studying",
        "Sports and relaxation",
        "Spending time with family",
      ],
      datasets: [
        {
          data: [6, 3, 8, 2, 5],
          backgroundColor: [
            "#8F0D0D4D", // accent!30
            "#8F0D0D66", // accent!40
            "#8F0D0D99", // accent!60
            "#8F0D0D", // accent
            "#8F0D0D33", // accent!20
          ],
          borderColor: "#450808",
          borderWidth: 1,
        },
      ],
    }

    const config: ChartConfiguration = {
      type: "pie" as keyof ChartTypeRegistry,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || ""
                const value = context.raw as number
                return `${label}: ${value} hours`
              },
            },
          },
        },
      },
    }

    chartInstance.current = new Chart(ctx, config)

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <canvas ref={chartRef} height="300"></canvas>
    </div>
  )
}

