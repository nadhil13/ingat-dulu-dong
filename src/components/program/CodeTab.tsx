
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

interface CodeTabProps {
  cppCode: string;
}

const CodeTab = ({ cppCode }: CodeTabProps) => {
  return (
    <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
          <Code className="w-6 h-6 mr-3" />
          Implementasi C++ - Metode Dekomposisi LU Gauss
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[600px] shadow-inner">
          <pre className="text-green-400 font-mono text-sm leading-relaxed">
            <code>{cppCode}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeTab;
