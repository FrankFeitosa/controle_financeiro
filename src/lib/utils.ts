

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Função utilitária para manipulação de classes CSS no Tailwind.
 * 
 * - Garante que classes duplicadas ou conflitantes sejam mescladas corretamente.
 * - Usa `clsx` para juntar e filtrar classes condicionalmente.
 * - Usa `twMerge` para resolver conflitos entre classes do Tailwind.
 *
 * @param inputs - Lista de classes a serem processadas, as primarias e as segundarias (condicionais).
 * @returns String de classes CSS otimizadas.
 */
export function cn(...inputs: ClassValue[]) { // Aqui eu to usando o spread operator `...` para passar a lista de classes como argumentos.
  return twMerge(clsx(inputs)); // Primeiro, `clsx` junta e filtra as classes (as primarias e as condicionais), depois `twMerge` resolve conflitos.
}
