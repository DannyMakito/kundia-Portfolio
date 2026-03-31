import { motion } from 'framer-motion';

interface TeamMember {
  id: string;
  role: string;
  angle: number;
}

const teamMembers: TeamMember[] = [
  { id: '1', role: 'CREATIVE PROD', angle: 0 },
  { id: '2', role: 'POST PROD', angle: 45 },
  { id: '3', role: 'VFX', angle: 90 },
  { id: '4', role: 'IA ENGINEER', angle: 135 },
  { id: '5', role: 'IA MOTION', angle: 180 },
  { id: '6', role: 'IA RETOUCHER', angle: 225 },
  { id: '7', role: 'CGI', angle: 270 },
  { id: '8', role: '3D', angle: 315 },
];

export function TeamDiagram() {
  const radius = 180;
  const centerX = 200;
  const centerY = 200;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative w-full max-w-[500px] mx-auto"
    >
      <svg viewBox="0 0 400 400" className="w-full h-auto">
        {/* Connection lines */}
        {teamMembers.map((member, i) => {
          const nextMember = teamMembers[(i + 1) % teamMembers.length];
          const x1 = centerX + radius * Math.cos((member.angle * Math.PI) / 180);
          const y1 = centerY + radius * Math.sin((member.angle * Math.PI) / 180);
          const x2 = centerX + radius * Math.cos((nextMember.angle * Math.PI) / 180);
          const y2 = centerY + radius * Math.sin((nextMember.angle * Math.PI) / 180);

          return (
            <line
              key={`line-${member.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#E5E5E5"
              strokeWidth="1"
            />
          );
        })}

        {/* Center node */}
        <circle cx={centerX} cy={centerY} r="40" fill="white" stroke="#E5E5E5" strokeWidth="1" />
        <text
          x={centerX}
          y={centerY - 5}
          textAnchor="middle"
          className="text-[8px] font-medium fill-gray-400"
        >
          LUXURY AI
        </text>
        <text
          x={centerX}
          y={centerY + 8}
          textAnchor="middle"
          className="text-[8px] font-medium fill-gray-400"
        >
          PRODUCTION
        </text>

        {/* Team member nodes */}
        {teamMembers.map((member, index) => {
          const x = centerX + radius * Math.cos((member.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((member.angle * Math.PI) / 180);

          return (
            <motion.g
              key={member.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Avatar circle */}
              <circle
                cx={x}
                cy={y}
                r="25"
                fill={`hsl(${(index * 45) % 360}, 60%, 80%)`}
                stroke="white"
                strokeWidth="2"
              />
              
              {/* Role label */}
              <rect
                x={x - 35}
                y={y + 30}
                width="70"
                height="18"
                rx="9"
                fill="white"
                stroke="#E5E5E5"
                strokeWidth="1"
              />
              <text
                x={x}
                y={y + 42}
                textAnchor="middle"
                className="text-[7px] font-medium fill-black uppercase"
              >
                {member.role}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}
