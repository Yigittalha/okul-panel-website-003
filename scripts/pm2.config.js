module.exports = {
  apps: [
    {
      name: 'okul-panel-dev',
      script: 'ng',
      args: 'serve --host 0.0.0.0 --port 4200 --poll 2000',
      cwd: process.cwd(),
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 4200
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      restart_delay: 3000,
      kill_timeout: 5000,
      listen_timeout: 8000,
      // Restart triggers
      ignore_watch: [
        'node_modules',
        'dist',
        '.git',
        '*.log'
      ],
      // Health check
      health_check_url: 'http://localhost:4200',
      health_check_grace_period: 30000,
      // Advanced options
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Auto restart on file changes (optional)
      // watch: ['src'],
      // watch_delay: 1000,
    },
    {
      name: 'okul-panel-ssr',
      script: 'node',
      args: 'dist/okul-panel/server/server.mjs',
      cwd: process.cwd(),
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      error_file: './logs/ssr-error.log',
      out_file: './logs/ssr-out.log',
      log_file: './logs/ssr-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '30s',
      restart_delay: 5000,
      // Health check
      health_check_url: 'http://localhost:4000',
      health_check_grace_period: 10000,
    }
  ]
};
