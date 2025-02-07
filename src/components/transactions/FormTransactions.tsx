import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'; // Aqui é uma lib para lidar com o formulário, os dados e as validações
import { motion } from 'framer-motion'; // Aqui é uma lib para animações
import {
    FileText,
    CreditCard,
    Calendar,
    Tags,
    X,
    PlusCircle
} from 'lucide-react';

// Tipagem para os dados do formulário
interface TransactionFormData {
    description: string;
    value: number;
    type: 'Receita' | 'Despesa';
    date: string;
    tags: string[];
}

// Inicio da função principal
const FormTransactions = () => {

    // Usando o useForm para lidar com o formulário
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<TransactionFormData>({
        defaultValues: {
            description: '',
            value: 0,
            type: 'Receita',
            date: '',
            tags: []
        }
    });

    const [newTag, setNewTag] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        setValue('tags', tags);
    }, [tags, setValue]);

    const addTag = () => {
        const tag = newTag.trim();
        if (tag && !tags.includes(tag)) {
            setTags((prev) => [...prev, tag]);
        }
        setNewTag('');
    };

    const removeTag = (index: number) => {
        setTags((prev) => prev.filter((_, i) => i !== index));
    };

    // Aqui a gente tem que chamar outra função externa para salvar os dados no local storage
    const onSubmit = (data: TransactionFormData): void => {
        console.log(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl"
        >
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-extrabold text-white mb-6 flex items-center gap-4"
            >
                <FileText className="text-blue-400" size={36} />
                Nova Transação
            </motion.h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                        Descrição
                    </label>
                    <div className="relative">
                        <input
                            {...register('description', { required: 'Descrição é obrigatória' })}
                            className={`w-full pl-12 py-3 bg-white/10 border border-white/20 rounded-xl 
                text-white placeholder-white/50 focus:border-blue-400 transition-all
                ${errors.description ? 'border-red-500' : ''}`}
                            placeholder="Ex: Compra no supermercado"
                        />
                        <FileText className="absolute left-4 top-4 text-white/60" />
                        {errors.description && (
                            <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>
                        )}
                    </div>
                </div>

                
                <div className="grid grid-cols-2 gap-4">
                    {/* Campo do valor */}
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Valor
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                {...register('value', {
                                    valueAsNumber: true,
                                    required: 'Valor é obrigatório',
                                    min: { value: 0.01, message: 'Valor deve ser positivo' }
                                })}
                                className={`w-full pl-12 py-3 bg-white/10 border border-white/20 rounded-xl 
                  text-white placeholder-white/50 focus:border-blue-400 transition-all
                  ${errors.value ? 'border-red-500' : ''}`}
                                placeholder="R$ 0,00"
                            />
                            <CreditCard className="absolute left-4 top-4 text-white/60" />
                            {errors.value && (
                                <p className="text-red-400 text-sm mt-2">{errors.value.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Campo do tipo */}
                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                            Tipo
                        </label>
                        <div className="relative">
                            <select
                                {...register('type')}
                                className="w-full pl-12 py-3 bg-white/10 border border-white/20 rounded-xl 
                  text-white focus:border-blue-400 transition-all appearance-none"
                            >
                                <option value="Receita" className="bg-zinc-800">Receita</option>
                                <option value="Despesa" className="bg-zinc-800">Despesa</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Campo da data */}
                <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                        Data
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            {...register('date', { required: 'Data é obrigatória' })}
                            className={`w-full pl-12 py-3 bg-white/10 border border-white/20 rounded-xl 
                text-white focus:border-blue-400 transition-all
                ${errors.date ? 'border-red-500' : ''}`}
                        />
                        <Calendar className="absolute left-4 top-4 text-white/60" />
                        {errors.date && (
                            <p className="text-red-400 text-sm mt-2">{errors.date.message}</p>
                        )}
                    </div>
                </div>

                {/* Campo das tags */}
                <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                        Tags
                    </label>
                    <div className="relative flex">
                        <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            className="w-full pl-12 py-3 bg-white/10 border border-white/20 rounded-l-xl 
                text-white placeholder-white/50 focus:border-blue-400 transition-all"
                            placeholder="Digite uma tag"
                        />
                        <button
                            type="button"
                            onClick={addTag}
                            className="bg-blue-500/20 text-blue-300 px-4 rounded-r-xl 
                hover:bg-blue-500/40 transition-colors"
                        >
                            <PlusCircle size={24} />
                        </button>
                        <Tags className="absolute left-4 top-4 text-white/60" />
                    </div>

                    {/* Tag Display */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex items-center bg-blue-500/20 text-blue-300 
                  px-3 py-1 rounded-full"
                            >
                                <span>{tag}</span>
                                <button
                                    type="button"
                                    onClick={() => removeTag(index)}
                                    className="ml-2 hover:text-red-400 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-500 text-white py-4 rounded-xl 
            hover:bg-blue-600 transition-colors font-semibold"
                >
                    Criar Transação
                </motion.button>
            </form>
        </motion.div>
    );
};

export default FormTransactions;